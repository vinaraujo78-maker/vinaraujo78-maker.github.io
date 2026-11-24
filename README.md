# Portfólio profissional de Vinicius Araújo

## Prévia e edição

Na raiz do repositório, execute `node preview.mjs` (Node.js 18+) e abra http://127.0.0.1:4173/. O conteúdo fica em `content.mjs`, os componentes e metadados em `build.mjs` e os canais em `assets/js/config.js`. Execute `node build.mjs` para gerar os HTML após editar conteúdo ou componentes.

## Instalação na Hostinger

1. Use PHP 8.1+ e HTTPS. A Hostinger documenta suporte a PHP e limites de envio por script no Single em https://www.hostinger.com/br/support/6976044-parametros-e-limites-dos-planos-de-hospedagem-na-hostinger/.
2. Para produção, defina `SITE_URL` com a origem HTTPS do domínio no ambiente de desenvolvimento e execute `node build.mjs`. O build gera canonical, Open Graph e sitemap para esse domínio e habilita indexação.
3. Extraia o ZIP em uma pasta vazia. Substitua os HTML, sitemap e robots pelos arquivos gerados para o domínio. Envie o conteúdo da pasta à raiz web, incluindo `.htaccess`. Verifique o HTTP 404 de um endereço inexistente.
4. Configure o endereço destinatário e o remetente do domínio em `contact-config.php` e habilite `formEnabled` em `assets/js/config.js`. Envie uma mensagem de teste pelo HTTPS e confirme a entrega na caixa do destinatário. O indicador de sucesso significa que o servidor aceitou a mensagem.
5. Cadastre apenas os canais profissionais que deseja mostrar. Para WhatsApp, informe DDI e DDD em dígitos. Para LinkedIn, use o endereço do perfil.

O ZIP começa com envio e indexação desativados, e com canais em branco. A medição prepara eventos e reserva IDs. Tags externas e interface de consentimento dependem de configuração.

## Materiais e pendências

O retrato da abertura é extraído da referência aprovada. As capas do blog e dos estudos conceituais são ilustrações editoriais. Uma fotografia original em alta resolução e materiais de projetos reais podem substituir esses arquivos. Os estudos atuais são conceituais. Para divulgar empresas, datas de trajetória ou resultados, use dados verificados e autorizados.
