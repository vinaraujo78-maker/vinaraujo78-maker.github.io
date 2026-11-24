const config = window.VA_CONFIG;
const nav = document.querySelector('#site-nav');
const menu = document.querySelector('.menu');

function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
}
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});

function measure(event, details = {}) {
  if (!config.measurement.enabled || localStorage.getItem('va_measurement_consent') !== 'granted') return;
  window.dataLayer ??= [];
  window.dataLayer.push({ event, ...details });
}

const channelTypes = [];
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) channelTypes.push(['E-mail', 'mailto:' + config.email, 'email']);
if (/^https:\/\/(www\.)?linkedin\.com\/in\/[^\s]+$/i.test(config.linkedin)) channelTypes.push(['LinkedIn', config.linkedin, 'linkedin']);
if (/^\d{10,15}$/.test(config.whatsapp)) channelTypes.push(['WhatsApp', 'https://wa.me/' + config.whatsapp, 'whatsapp']);
if (/^https:\/\/[^\s]+$/i.test(config.calendar)) channelTypes.push(['Agendar conversa', config.calendar, 'calendar']);
function channelLink([label, url, kind]) {
  const link = document.createElement('a');
  link.href = url;
  link.textContent = label;
  link.addEventListener('click', () => measure('contact_channel_click', { channel: kind }));
  return link;
}
document.querySelectorAll('[data-channels], [data-social]').forEach(container => {
  const channels = container.matches('[data-social]') ? channelTypes.filter(([, , kind]) => kind === 'linkedin') : channelTypes;
  for (const channel of channels) {
    if (container.childElementCount) container.append(' · ');
    container.append(channelLink(channel));
  }
});
const whatsapp = channelTypes.find(([, , kind]) => kind === 'whatsapp');
if (whatsapp) {
  const link = channelLink(whatsapp);
  link.className = 'floating';
  document.body.append(link);
}
if (/^\/servicos\/.+/.test(location.pathname)) measure('area_view', { path: location.pathname });
document.querySelectorAll('a.media[href^="/portfolio/"]').forEach(link => {
  link.addEventListener('click', () => measure('project_click', { path: link.pathname }));
});

for (const listing of document.querySelectorAll('[data-listing]')) {
  const cards = Array.from(listing.querySelectorAll('[data-category]'));
  const search = listing.querySelector('[data-search]');
  const filter = listing.querySelector('[data-filter]');
  const pagination = listing.querySelector('[data-pagination]');
  const pageSize = Number(listing.dataset.pageSize);
  const normalize = value => value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
  function render(page = 1) {
    const query = normalize(search?.value.trim() || '');
    const matching = cards.filter(card => (!filter.value || card.dataset.category === filter.value) && normalize(card.textContent).includes(query));
    const visible = new Set(matching.slice((page-1)*pageSize, page*pageSize));
    cards.forEach(card => { card.hidden = !visible.has(card); });
    listing.querySelector('[data-empty]').hidden = matching.length > 0;
    pagination.replaceChildren();
    const count = Math.ceil(matching.length/pageSize);
    if (count < 2) return;
    for (let index=1; index<=count; index++) {
      const button = document.createElement('button');
      button.textContent = String(index);
      button.setAttribute('aria-label', 'Página ' + index);
      if (index === page) button.setAttribute('aria-current', 'page');
      button.addEventListener('click', () => {
        render(index);
        pagination.children[index-1]?.focus();
      });
      pagination.append(button);
    }
  }
  search?.addEventListener('input', () => render());
  filter.addEventListener('change', () => render());
  render();
}

for (const carousel of document.querySelectorAll('[data-carousel]')) {
  const track = carousel.querySelector('.carousel-track');
  const controls = carousel.querySelector('.carousel-controls');
  const before = carousel.querySelector('[data-prev]');
  const after = carousel.querySelector('[data-next]');
  const indicators = carousel.querySelector('[data-dots]');
  let positions = [];
  let index = 0;
  function scroll(to) {
    track.scrollTo({ left: positions[to] ?? 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  function update() {
    index = positions.reduce((best, value, current) =>
      Math.abs(track.scrollLeft-value) < Math.abs(track.scrollLeft-positions[best]) ? current : best, 0);
    before.disabled = index === 0;
    after.disabled = index >= positions.length-1;
    Array.from(indicators.children).forEach((button, current) => button.setAttribute('aria-current', String(index === current)));
  }
  function layout() {
    const limit = track.scrollWidth - track.clientWidth;
    const first = track.firstElementChild.offsetLeft;
    positions = Array.from(new Set(Array.from(track.children, card => Math.min(limit, card.offsetLeft - first))));
    controls.hidden = positions.length < 2;
    indicators.replaceChildren(...positions.map((_, current) => {
      const button = document.createElement('button');
      button.textContent = String(current+1);
      button.setAttribute('aria-label', 'Ir para posição ' + (current+1));
      button.addEventListener('click', () => scroll(current));
      return button;
    }));
    update();
  }
  before.addEventListener('click', () => scroll(index-1));
  after.addEventListener('click', () => scroll(index+1));
  track.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(layout).observe(track);
}

document.querySelector('[data-share]')?.addEventListener('click', async () => {
  const status = document.querySelector('[data-share-status]');
  try {
    if (navigator.share) await navigator.share({ title: document.title, url: location.href });
    else {
      await navigator.clipboard.writeText(location.href);
      status.textContent = ' Link copiado.';
    }
  } catch (error) {
    if (error.name !== 'AbortError') status.textContent = ' Copie o endereço na barra do navegador.';
  }
});

const form = document.querySelector('[data-contact]');
if (form && config.formEnabled) {
  const status = form.querySelector('[data-status]');
  const fields = form.querySelector('fieldset');
  const submit = form.querySelector('button[type=submit]');
  async function prepare() {
    try {
      const response = await fetch(form.action, { cache: 'no-store' });
      const data = await response.json();
      if (!response.ok || !data.token) throw new Error();
      form.elements.token.value = data.token;
      fields.disabled = false;
      return true;
    } catch {
      status.textContent = 'O formulário está temporariamente indisponível.';
      return false;
    }
  }
  prepare().then(ready => { if (ready) status.textContent = ''; });
  form.addEventListener('focusin', () => measure('contact_form_start'), { once: true });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    submit.disabled = true;
    status.textContent = 'Enviando…';
    try {
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form) });
      const data = await response.json();
      status.textContent = data.message || 'Não foi possível enviar a mensagem.';
      if (response.status === 403) {
        const ready = await prepare();
        if (ready) status.textContent = 'A sessão foi renovada. Envie novamente.';
      }
      if (response.ok && data.sent === true) {
        const token = form.elements.token.value;
        form.reset();
        form.elements.token.value = token;
        measure('contact_form_confirmed');
      }
    } catch {
      status.textContent = 'Não foi possível confirmar o envio. Tente novamente.';
    } finally {
      submit.disabled = false;
    }
  });
}
