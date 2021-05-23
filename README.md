![GoBarber Logo](/src/shared/Logo.png)

![Badge](https://img.shields.io/static/v1?label=node.js&message=platform&color=green&style=for-the-badge)   ![Badge](https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge)    ![Badge](https://img.shields.io/static/v1?label=react-native&message=framework&color=lightblue&style=for-the-badge)    ![Badge](https://img.shields.io/static/v1?label=PostgreSQL&message=database&color=darkblue&style=for-the-badge)    ![Badge](https://img.shields.io/static/v1?label=MongoDB&message=database&color=darkgreen&style=for-the-badge)   ![Badge](https://img.shields.io/static/v1?label=redis&message=cachebroker&color=darkred&style=for-the-badge)
![Badge](https://img.shields.io/static/v1?label=docker&message=shipping&color=blue&style=for-the-badge)

Aplicação desenvolvida no bootcamp GoStack, da Rocketseat. Desenvolvido com **Node.Js** no back-end, **React** no front-end e **React Native** no mobile.

[`Descrição`](#Descrição) - [`Funcionalidades`](#Funcionalidades) - [`Execução`](#Execução) - [`Pré-requisitos`](#Pré-requisitos) - [`Autoria`](#Autoria)

# Descrição

Uma plataforma para agendamento de horários com barbeiros e cabeleireiros.

# Funcionalidades

[✔️] Cadastro de usuário/profissional na aplicação;
[✔️] Login de usuário/profissional;
[✔️] Listagem de profissionais com os dias disponíveis para agendamento;
[✔️] Listagem dos agendamentos de um profissional com o perfil do usuário que agendou;
[✔️] Perfil do usuário com atualização dos dados e da foto de perfil;
[✔️] Testes básicos na aplicação;
[😟️] Deploy da aplicação.

# Pré-requisitos

Essa aplicação utiliza o Docker para conexão com o Redis e com os bancos de dados PostgreSQL e MongoDB. Então, é necessário baixar e subir essas ferramentas para utilizar a aplicação. Também é necessário ter um emulador para abrir o aplicativo mobile.

# Execução

**Back-end**
1. Baixe o projeto com o comando `git clone https://github.com/paulanguedes/iniciando-back-end.git`;
2. No console rode o comendo `yarn` para baixar as dependências;
3. Depois rode o comando para criar as migrations `yarn typeorm migration:run`;
4. E, por fim, rode `yarn dev:server`.

**Front-end**
1. Baixe o projeto com o comando `git clone https://github.com/paulanguedes/gobarber-web.git`;
2. No console rode o comendo `yarn` para baixar as dependências;
4. Depois rode `yarn start` e pronto! Um aba do seu navegador padrão será aberta com a aplicação.

**Mobile**
1. Baixe o projeto com o comando `git clone https://github.com/paulanguedes/gobarberapp.git`;
2. No console rode o comendo `yarn` para baixar as dependências;
4. Rode `yarn react-native run-android` e depois `yarn react-native start`.

Para executar os testes nos três projetos, basta rodar `yarn test`. No front-end você consegue verificar a cobertura de testes com o comando `yarn test:coverage` e abrir o arquivo HTML na pasta *coverage*.

# Autoria
O projeto e o seu tutorial é de autoria da [Rocketseat](https://rocketseat.com.br/) 🚀

A execução é minha mesmo [Paula Nogueira Guedes](https://www.linkedin.com/in/paulanguedes/) 😉️
![Foto de perfil Paula Guedes!](https://media-exp1.licdn.com/dms/image/C4E03AQHUtqm11bt6tw/profile-displayphoto-shrink_200_200/0/1617747963262?e=1627516800&v=beta&t=6UomQ0YSG7AYDZBGHippzcs3bPm-NAexJrp2pb8_k54)
