
# Começar um projeto Next.js no VS Code:

## Passo-a-passo
- Criar pasta e abrir ela no VS Code
- Abrir o terminal e digitar o comando:
```bash
npx create-next-app@latest .
```
- Terá umas perguntas no terminal, aperte Enter até as perguntas terminarem.
- Quando o projeto for criado inicie a primeira vez para gerar a pasta .next:
```bash
npm run dev
```
- Para ver o projeto funcionando abra [http://localhost:3000](http://localhost:3000) no navegador.
- Vá no Terminal e digite:
```bash
git remote add origin https://github.com/gabrielroldann/platform-event.git
```
- Carregue os arquivos do projeto para sua pasta do VS Code digitando o comando abaixo no Terminal
```bash
git fetch
```

## Dependências

Cole os comandos abaixo no terminal (separadamente):
```bash
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
npm install @prisma/client
npm install next-auth
npm install date-fns --save
npx shadcn-ui@latest init
```

Componentes usados do shadcn (biblioteca de componentes), cole o comando abaixo todo no Terminal:
```bash
npx shadcn-ui@latest add avatar button calendar card command dialog drawer input label radio-group select textarea
```



