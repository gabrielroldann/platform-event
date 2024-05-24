
## Começar um projeto Next.js no VS Code:

# 01
- Criar pasta e abrir ela no VS Code

# 02
- Abrir o terminal e digitar o comando:
```bash
npx create-next-app@latest .
```
- Terá umas perguntas no terminal, aperte Enter até as perguntas terminarem.

# 03
- Quando o projeto for criado inicie a primeira vez para gerar a pasta .next:
```bash
npm run dev
```

# 04
...

## Dependencies

Cole os comandos abaixo no terminal (separadamente):
```bash
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
npm install @prisma/client
npm install next-auth
npm install date-fns --save
npx shadcn-ui@latest init

Dependências do shadcn (biblioteca de componentes)
npx shadcn-ui@latest add avatar button calendar card command dialog drawer input label radio-group select textarea
(Pode colar todo esse comando no terminal
```


Para ver o projeto funcionando abra [http://localhost:3000](http://localhost:3000) no navegador.
