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
const footerSocialChannels = channelTypes.filter(([, , kind]) => kind==='linkedin');
if (/^https:\/\/(www\.)?instagram\.com\/[\w.]+\/?$/i.test(config.instagram)) {
  footerSocialChannels.push(['Instagram',config.instagram,'instagram']);
}
for (const channel of footerSocialChannels) {
  const slot = document.querySelector(`[data-footer-social="${channel[2]}"]`);
  if (!slot) continue;
  const link = channelLink(channel);
  link.className = slot.className;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label',`${channel[0]} (nova aba)`);
  link.replaceChildren(...slot.childNodes);
  slot.replaceWith(link);
}
const whatsapp = channelTypes.find(([, , kind]) => kind === 'whatsapp');
if (whatsapp) {
  const link = channelLink(whatsapp);
  link.className = 'floating';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', 'Abrir conversa profissional no WhatsApp (nova aba)');
  link.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.7a9 9 0 0 1-13.15 8L3 21l1.3-4.66A9 9 0 1 1 21 11.7Z"/><path d="M9.15 7.55c-.28-.66-.93-.58-1.32-.31-.53.37-.83 1.02-.83 1.72 0 2.7 3.42 6.48 6.92 7.2.76.16 1.88-.17 2.28-.85.29-.49.46-1.12.1-1.33l-2.03-1.05c-.32-.16-.54-.03-.73.21l-.63.78c-.18.22-.4.23-.65.11a7 7 0 0 1-2.74-2.54c-.14-.23-.12-.42.04-.6l.53-.62c.18-.22.21-.43.11-.7l-1.05-2.02Z"/></svg>';
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
  const buttons = Array.from(controls.querySelectorAll('button'));
  const maxScroll = () => track.scrollWidth - track.clientWidth;

  function update() {
    const distance = maxScroll();
    controls.hidden = distance <= 1;
    const current = track.scrollLeft > distance / 2 ? 1 : 0;
    buttons.forEach((button, index) => button.setAttribute('aria-current', String(index === current)));
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => track.scrollTo({
      left: index ? maxScroll() : 0,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    }));
  });
  track.addEventListener('scroll', update, { passive: true });
  new ResizeObserver(update).observe(track);
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
