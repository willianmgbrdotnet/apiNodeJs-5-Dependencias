# Api NodeJS

### npm init

## Dependencias

### Express
Provedor http

### body-parser
Serializador

### cors
Administrador de permissão de acesso

### nodemon
hot-reload 

### morgan
log das requisições

<li>npm install express body-parser morgan cors nodemon</li>

## package.json registra todas as dependencias necessárias para rodar o projeto.

### o comando "npm start" irá executar o que estiver dentro deste script "start" do package.json (o servidor com hot-reload)
//CTRL+c quando quizer parar o servidor

## Criar a pasta config e dentro dela o Arquivo routes.js
routes.js ficará responsável pelos metodos CRUD da api. Então esses métodos serão retirados do index.js

## Configurar conexão das rotas com o MySQL 
trocar dados em memória para Banco de Dados real CRUD

<li>npm install mysql2</li>

<li>Metodo GET http://localhost:8090</li>

<li>Metodo POST http://localhost:8090/add</li>