const pages = [
  ["Início", "/"],
  ["Sobre", "/sobre/"],
  ["Serviços", "/servicos/"],
  ["Portfólio", "/portfolio/"],
  ["Conteúdo", "/conteudos/"],
  ["Contato", "/contato/"]
];
const path = location.pathname.replace(/index\.html$/, "");
const asset = name => `/assets/img/${name}?v=photos20261124`;
const link = (url, label, cls = "") =>
  `<a class="${cls} ${path === url ? "active" : ""}" href="${url}">${label}</a>`;
const button = (url, label, cls = "") =>
  `<a class="btn ${cls}" href="${url}">${label}</a>`;
const header = `
  <header class="top">
    <div class="wrap navrow">
      <a class="brand" href="/" aria-label="Vinicius Araújo, início">
        <img class="logo" src="${asset("logo-va.svg")}" alt="Vinicius Araújo">
      </a>
      <button class="menu" aria-label="Abrir menu" aria-expanded="false" aria-controls="site-nav">☰</button>
      <nav class="nav" id="site-nav" aria-label="Navegação principal">
        ${pages.map(([name, url]) => link(url, name)).join("")}
        ${button("/contato/", "Fale comigo", "nav-cta")}
      </nav>
    </div>
  </header>`;
const footer = `
  <footer class="footer">
    <div class="wrap foot">
      <div><b>Vinicius Araújo</b><br>Marketing &amp; Performance Digital · São Paulo, SP</div>
      <nav class="footnav" aria-label="Navegação do rodapé">${pages.map(([name, url]) => link(url, name)).join("")}</nav>
      <small>© ${new Date().getFullYear()} Vinicius Araújo</small>
    </div>
  </footer>`;
const eyebrow = (text, orange = true) => `<p class="eyebrow ${orange ? "orange" : ""}">${text}</p>`;
const pageHero = (label, title, lead) => `
  <section class="page-hero"><div class="wrap">
    ${eyebrow(label)}
    <h1 class="page-title">${title}</h1>
    <p class="page-lead">${lead}</p>
  </div></section>`;
const service = (icon, title, text, href = "/contato/") => `
  <a class="service-row" href="${href}">
    <span class="ico" aria-hidden="true">${icon}</span>
    <span><h3>${title}</h3><p>${text}</p></span>
    <span class="arrow" aria-hidden="true">→</span>
  </a>`;
const blogCard = (image, category, title, href) => `
  <a class="card blog-card" href="${href}">
    <img class="blog-art" src="${asset(image)}" alt="" loading="lazy">
    <div class="pad"><small>${category}</small><h3>${title}</h3><span class="arrow" aria-hidden="true">→</span></div>
  </a>`;
const content = {
  "/": `
    <section class="hero wrap">
      <div class="hero-copy">
        ${eyebrow("Marketing & performance digital", false)}
        <h1>Estratégia digital<br>para marcas que<br>querem <span class="accent">crescer.</span></h1>
        <p class="lead">Marketing, tráfego pago, sites e performance para gerar mais visibilidade, oportunidades e resultados reais.</p>
        <div class="actions">${button("/contato/", "Fale comigo")}${button("/servicos/", "Ver serviços", "ghost")}</div>
      </div>
      <div class="hero-visual"><img style="display:block!important;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:55% 38%;z-index:3" src="${asset("retrato_hero_referencia.png")}" alt="Vinicius Araújo, retrato de perfil"></div>
    </section>
    <section class="proof-wrap"><div class="wrap proof">
      <div><strong aria-hidden="true">◫</strong><span><b>Planejamento</b><br>com objetivos claros</span></div>
      <div><strong aria-hidden="true">↗</strong><span><b>Performance</b><br>com foco em resultado</span></div>
      <div><strong aria-hidden="true">▱</strong><span><b>Mensuração</b><br>para orientar decisões</span></div>
      <div><strong aria-hidden="true">◎</strong><span><b>Execução</b><br>do plano à otimização</span></div>
    </div></section>
    <section class="section">
      <div class="wrap">
        <div class="section-head"><div>${eyebrow("Como posso te ajudar")}<h2>Soluções digitais que<br>geram <span class="accent">resultados.</span></h2></div><p>Projetos e estratégias pensados para atrair, converter e dar consistência ao crescimento do seu negócio.</p></div>
        <div class="grid three">
          <article class="card"><div class="ico" aria-hidden="true">▣</div><h3>Sites e landing pages</h3><p>Experiências rápidas e responsivas, construídas para transformar visitas em conversas e oportunidades.</p><a class="arrow" href="/servicos/sites/" aria-label="Explorar sites e landing pages">→</a></article>
          <article class="card featured"><div class="ico" aria-hidden="true">♧</div><h3>Gestão de tráfego pago</h3><p>Planejamento, configuração e otimização de campanhas em Google Ads e Meta Ads.</p><a class="arrow" href="/servicos/trafego-pago/" aria-label="Explorar gestão de tráfego pago">→</a></article>
          <article class="card"><div class="ico" aria-hidden="true">▱</div><h3>Estratégia &amp; performance</h3><p>Diagnóstico e mensuração para conectar mídia, páginas e objetivos de negócio.</p><a class="arrow" href="/servicos/" aria-label="Conhecer a abordagem de estratégia e performance">→</a></article>
        </div>
        <div class="band"><div><h3>Vamos construir resultados juntos?</h3><p>Converse comigo sobre seu projeto e os próximos passos.</p></div>${button("/contato/", "Fale comigo", "band-button")}</div>
      </div>
    </section>`,
  "/sobre/": `
    ${pageHero("Sobre mim", "Conheça minha <span class='accent'>trajetória.</span>", "Atuação em marketing digital com foco em performance, aquisição e presença digital.")}
    <section class="section"><div class="wrap about-grid">
      <div class="portrait-box"><img style="display:block!important;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:3" src="${asset("retrato_sobre_referencia.png")}" alt="Vinicius Araújo lendo" loading="lazy"></div>
      <div class="about-copy"><p>Conecto estratégia, dados e execução para construir uma presença digital coerente e apoiar o crescimento de marcas e negócios.</p><p>Meu trabalho passa por mídia paga, desenvolvimento de sites e landing pages e análise de performance, sempre com comunicação clara e objetivos alinhados.</p>
        <div class="mini-grid"><div class="mini"><b>◎</b>Foco em<br>resultado</div><div class="mini"><b>▥</b>Visão<br>estratégica</div><div class="mini"><b>ϟ</b>Execução<br>ágil</div></div>
      </div>
    </div></section>`,
  "/servicos/": `
    ${pageHero("Serviços", "O que eu <span class='accent'>ofereço.</span>", "Soluções sob medida para a sua necessidade no digital.")}
    <section class="section"><div class="wrap service-list">
      ${service("▣", "Sites e Landing Pages", "Desenvolvimento de páginas institucionais e experiências de alta conversão.", "/servicos/sites/")}
      ${service("♧", "Gestão de Tráfego Pago", "Campanhas no Meta Ads e Google Ads com foco em aquisição de clientes.", "/servicos/trafego-pago/")}
      <div class="approach-note"><span class="ico" aria-hidden="true">▱</span><div><h3>Estratégia &amp; performance</h3><p>Abordagem integrada de planejamento, mensuração e otimização para sustentar o crescimento.</p></div></div>
    </div></section>`,
  "/servicos/sites/": `
    ${pageHero("Serviços · Sites", "Sites que transformam visitas em <span class='accent'>conversas.</span>", "Páginas rápidas e responsivas que apresentam sua oferta com clareza e facilitam o contato.")}
    <section class="section"><div class="wrap narrow"><article class="card"><h2>O que seu site precisa fazer</h2><p>Explicar o que você oferece, organizar a informação e orientar a pessoa até o próximo passo, em qualquer tela.</p><ul class="feature-list"><li>Estrutura institucional ou landing page</li><li>Conteúdo organizado para leitura mobile</li><li>Chamadas para ação claras e acessíveis</li><li>Base pronta para análise de desempenho</li></ul>${button("/contato/", "Conversar sobre meu site")}</article></div></section>`,
  "/servicos/trafego-pago/": `
    ${pageHero("Serviços · Tráfego pago", "Mídia planejada para gerar <span class='accent'>oportunidades.</span>", "Gestão de campanhas em Google Ads e Meta Ads, alinhada aos objetivos e à jornada do seu negócio.")}
    <section class="section"><div class="wrap narrow"><article class="card"><h2>Gestão de ponta a ponta</h2><p>O trabalho parte dos objetivos, passa pela configuração e mensuração e segue com análise e otimização contínuas.</p><ul class="feature-list"><li>Planejamento de campanhas e públicos</li><li>Configuração de mídia e eventos</li><li>Acompanhamento de investimento e conversões</li><li>Otimização orientada pelos dados disponíveis</li></ul>${button("/contato/", "Conversar sobre tráfego pago")}</article></div></section>`,
  "/portfolio/": `
    ${pageHero("Portfólio / Cases", "Projetos com foco em <span class='accent'>resultado.</span>", "Veja demonstrações de estrutura, mídia e presença digital.")}
    <section class="section"><div class="wrap case-list">
      <article class="case-row"><img src="${asset("case_1_imagem.png")}" alt="" loading="lazy"><div><small>PROJETO CONCEITUAL · DEMONSTRAÇÃO</small><h3>Presença digital para negócio local</h3><p>Estrutura de site institucional, hierarquia de conteúdo e caminho de contato.</p></div><span class="arrow" aria-hidden="true">→</span></article>
      <article class="case-row"><img src="${asset("case_2_imagem.png")}" alt="" loading="lazy"><div><small>PROJETO CONCEITUAL · DEMONSTRAÇÃO</small><h3>Estratégia de aquisição digital</h3><p>Exemplo de organização de campanhas, página de destino e mensuração de oportunidades.</p></div><span class="arrow" aria-hidden="true">→</span></article>
      <p class="case-note">Demonstrações conceituais. Nenhum resultado de cliente ou métrica está sendo apresentado.</p>
    </div></section>`,
  "/conteudos/": `
    ${pageHero("Conteúdo", "Insights e estratégias<br>sobre <span class='accent'>marketing digital.</span>", "Artigos e conteúdos práticos para você aplicar no seu negócio.")}
    <section class="section"><div class="wrap grid three">
      ${blogCard("blog_capa_1.png", "MÍDIA PAGA", "Como estruturar campanhas no Meta Ads", "/conteudos/site-que-converte/")}
      ${blogCard("blog_capa_2.png", "DESENVOLVIMENTO", "Site que converte: 5 elementos essenciais", "/conteudos/site-que-converte/")}
      ${blogCard("blog_capa_3.png", "PERFORMANCE", "Tráfego pago: como gerar demanda qualificada", "/conteudos/site-que-converte/")}
    </div></section>`,
  "/contato/": `
    ${pageHero("Contato", "Fale <span class='accent'>comigo.</span>", "Tem um projeto, dúvida ou quer entender como posso ajudar seu negócio a crescer? Envie uma mensagem.")}
    <section class="section"><div class="wrap contact-grid">
      <form class="form" id="contact-form"><label>Seu nome<input name="name" autocomplete="name" placeholder="Seu nome" required></label><label>Seu e-mail<input name="email" type="email" autocomplete="email" placeholder="Seu e-mail" required></label><label>Assunto<select name="subject" required><option value="">Assunto</option><option>Sites e landing pages</option><option>Gestão de tráfego pago</option><option>Estratégia digital</option><option>Outro assunto</option></select></label><label>Sua mensagem<textarea name="message" placeholder="Sua mensagem" required></textarea></label><button class="btn" type="submit">Enviar mensagem</button><small id="status" aria-live="polite">Formulário demonstrativo: o envio será conectado quando o canal de atendimento for definido.</small></form>
      <div class="contact-photo"><img style="display:block!important;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:3" src="${asset("retrato_contato_referencia.png")}" alt="Vinicius Araújo com camisa branca" loading="lazy"></div>
    </div></section>`,
  "/conteudos/site-que-converte/": `
    ${pageHero("Conteúdo · Sites", "Site que converte: 5 elementos essenciais", "Uma boa página deixa claro o que oferece, para quem e qual é o próximo passo.")}
    <section class="section"><div class="wrap narrow"><article class="card article"><h2>O que ajuda uma página a transformar visitas em contatos?</h2><p>Uma página eficiente combina uma proposta clara, conteúdo organizado, boa experiência no celular e um caminho simples para iniciar uma conversa.</p><h3>1. Uma mensagem direta</h3><p>Explique rapidamente o que você oferece e para quem. A pessoa precisa entender o valor antes de percorrer a página.</p><h3>2. Uma ação fácil de encontrar</h3><p>Use chamadas claras e consistentes para orientar a pessoa ao contato ou à próxima etapa.</p><h3>3. Experiência rápida e mobile</h3><p>Texto legível, imagens otimizadas e navegação simples ajudam a reduzir atrito em qualquer tela.</p></article></div></section>`
};
const current = content[path] || content["/"];
const pageName = pages.find(([, url]) => url === path)?.[0] || "Vinicius Araújo";
document.title = `${path === "/" ? "Marketing & Performance Digital" : pageName} | Vinicius Araújo`;
document.body.innerHTML = header + `<main id="main">${current}</main>` + footer;
document.querySelector(".menu")?.addEventListener("click", event => {
  const button = event.currentTarget;
  const open = button.getAttribute("aria-expanded") !== "true";
  button.setAttribute("aria-expanded", String(open));
  document.querySelector(".nav")?.classList.toggle("open", open);
});
document.querySelector("#contact-form")?.addEventListener("submit", event => {
  event.preventDefault();
  const status = document.querySelector("#status");
  if (status) status.textContent = "Obrigado! Esta prévia ainda não envia mensagens. Entre em contato pelo canal informado no seu perfil.";
});
