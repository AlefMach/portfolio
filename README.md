# Portfolio - Alef Machado

Portfolio pessoal desenvolvido com React, TypeScript e Vite para apresentar projetos, experiencia profissional, stack, areas de estudo e formas de contato.

## Stack

- React 19
- TypeScript
- Vite
- Material UI
- Framer Motion
- EmailJS para envio do formulario de contato

## Requisitos

- Node.js compativel com o projeto
- npm

A versao sugerida esta em `.tool-versions`.

## Configuracao local

Instale as dependencias:

```bash
npm install
```

Crie um arquivo `.env` na raiz usando `.env-example` como base:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

As variaveis acima sao usadas pelo formulario de contato. Mais detalhes estao em `docs/emailjs-contact-form.md`.

## Comandos

```bash
npm run dev
npm run build
npm run lint
npm run check-format
npm run preview
```

Comandos de manutencao:

```bash
npm run lint:fix
npm run format
```

## Estrutura

- `src/main.tsx`: ponto de entrada da aplicacao.
- `src/App.tsx`: composicao principal com navbar, home e footer.
- `src/components/layout`: componentes estruturais, como navbar e footer.
- `src/components/sections`: secoes principais da pagina inicial.
- `src/components/common`: componentes compartilhados, como toggles e links sociais.
- `src/contexts`: contexto de tema.
- `src/i18n`: provider, contexto e arquivos de traducao.
- `src/i18n/locales`: textos em portugues e ingles.
- `src/services/contactEmail.ts`: integracao do formulario com EmailJS.
- `src/theme`: configuracao do tema Material UI.
- `public/images`: imagens usadas no perfil, favicon, Open Graph e projetos.
- `docs`: documentacao complementar.

## Internacionalizacao

Os textos do portfolio ficam em:

- `src/i18n/locales/pt.json`
- `src/i18n/locales/en.json`

Ao alterar uma chave em um idioma, mantenha a mesma estrutura no outro idioma para evitar que componentes recebam campos ausentes.

## Build e bundle

O build roda TypeScript e Vite:

```bash
npm run build
```

O `vite.config.ts` tambem usa `rollup-plugin-visualizer`, que gera `stats.html` localmente. Esse arquivo esta no `.gitignore`.

## Deploy

O projeto esta configurado para GitHub Pages com base `/portfolio/`.

```bash
npm run deploy
```

O deploy executa `npm run build` antes de publicar `dist`.

## Auditoria

Foi criado um levantamento de inconsistencias em `INCONSISTENCIAS.md`.
