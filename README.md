
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
- No canto inferior esquerdo mude a branch de "main" para "stage"
- Carregue os arquivos do projeto para sua pasta do VS Code digitando o comando abaixo no Terminal
```bash
git fetch
```
- Mude para o Source Control no VS Code na barra lateral esquerda, onde terá as alterações do Git, e aperte no botão Sync Changes e 'Ok' no Pop-Up que vai abrir

## Dependências

- Cole os comandos abaixo no terminal:
```bash
npm install prisma --save-dev
```
```bash
npx prisma init --datasource-provider postgresql
```
```bash
npm install @prisma/client
```
```bash
npm install next-auth
```
```bash
npm install date-fns --save
```
```bash
npx shadcn-ui@latest init
```

- Componentes usados do shadcn (biblioteca de componentes), cole o comando abaixo todo no Terminal:
```bash
npx shadcn-ui@latest add avatar button calendar card command dialog drawer input label radio-group select textarea
```

- Depois de dar fetch nos arquivos do projeto e instalar todas as dependências, coloque o projeto para rodar com:
```bash
npm run dev
```
