# 🌐 ProLink

### Conectando profissionais, competências e oportunidades

------------------------------------------------------------------------

## 📌 Sobre o Projeto

O **ProLink** é uma plataforma web desenvolvida como parte da **Global
Solution -- Front-End Design & Web Development (2º semestre/2025)**.

Inspirado no tema **"O Futuro do Trabalho"**, o projeto propõe uma rede
profissional moderna que conecta pessoas, incentiva a colaboração e
fortalece o desenvolvimento de competências em um mercado cada vez mais
tecnológico, diverso e dinâmico.

A aplicação foi construída em **React + Vite**, estilizada com
**Tailwind CSS**, responsiva e com **Dark Mode**, apresentando uma
experiência fluida, intuitiva e visualmente moderna.

------------------------------------------------------------------------

## 🎯 Objetivo Geral

Criar uma **Single Page Application (SPA)** que simula uma rede
profissional semelhante ao LinkedIn, permitindo:

-   Visualizar perfis profissionais fictícios\
-   Ver detalhes completos de cada perfil\
-   Usar sistema de busca e filtros\
-   Incentivar networking e recomendações\
-   Interagir por meio de botões ("Recomendar" e "Enviar mensagem")

Seguindo as diretrizes da Global Solution, o projeto reforça o papel da
tecnologia na construção de um futuro do trabalho mais inclusivo,
conectado e humano.

------------------------------------------------------------------------

## 🚀 Funcionalidades

-   Interface 100% responsiva\
-   Tema **Dark/Light** com transição suave\
-   Listagem de perfis (JSON local com +60 profissionais fictícios)\
-   Modal com informações detalhadas:
    -   Dados pessoais e acadêmicos\
    -   Experiências profissionais\
    -   Hard Skills e Soft Skills\
    -   Projetos\
    -   Certificações\
    -   Idiomas\
-   Sistema de busca e filtros por:
    -   Área\
    -   Cidade\
    -   Tecnologia\
-   Cards interativos\
-   Âncoras de navegação (Home, Descrição, Cards, Contato)\
-   Footer com redes sociais e email animado\
-   Componentização completa

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

-   **React + Vite**
-   **Tailwind CSS**
-   **Lucide React**
-   **React Icons**
-   **JavaScript ES6+**
-   **CSS Custom Properties**
-   **JSON local**

------------------------------------------------------------------------

## 📁 Estrutura Geral do Projeto

    /backend
     ├── data/
          ├── profiles.json
     ├── node_modules/
     ├── server.js
     ├── package.json
     └── package-lock.json

    /frontend
     ├── node_modules/
     ├── public/
     │    └── logo.png
     ├── src/
     │    ├── assets/
     │    │    ├── BannerDark.png
     │    │    └── BannerLight.png
     │    ├── components/
     │    │    ├── Card.jsx
     │    │    ├── CardSection.jsx
     │    │    ├── DarkModeButton.jsx
     │    │    ├── Description.jsx
     │    │    ├── Footer.jsx
     │    │    ├── Header.jsx
     │    │    ├── Hero.jsx
     │    │    └── Modal.jsx
     │    ├── mocks/
     │    │    ├── profiles.json
     │    │    └── texts.js
     │    ├── App.jsx
     │    ├── Home.jsx
     │    ├── index.css
     │    ├── main.jsx
     │    └── vite.config.js
     ├── index.html
     ├── package.json
     ├── package-lock.json
     └── README.md

------------------------------------------------------------------------

## 📥 Instalação e Execução do Projeto

O projeto possui **dois ambientes**: Backend e Frontend.

------------------------------------------------------------------------

## ▶️ 1. Clonar o Repositório

``` bash
git clone https://github.com/usuario/prolink.git
```

------------------------------------------------------------------------

## ▶️ 2. Instalar e Executar o Backend

``` bash
cd backend
npm install
npm start
```

O backend iniciará em:

    http://localhost:5000

------------------------------------------------------------------------

## ▶️ 3. Instalar e Executar o Frontend

``` bash
cd ../frontend
npm install
npm run dev
```

O frontend abrirá automaticamente em:

    http://localhost:5173

### 📘 Repositório GitHub

`https://github.com/Global-Solution-FIAP-01/GS_FrontWebDev.git`

------------------------------------------------------------------------

## 👥 Integrantes do Grupo

**Murilo Macedo Pina**         RM: 563397
**Vitor Carvalho Alexandre**   RM: 562298
**Alexandre Martins Lucas**    RM: 561732

------------------------------------------------------------------------

## 💬 Contato

📧 **prolink@gmail.com**

------------------------------------------------------------------------

## 📄 Licença

Projeto acadêmico desenvolvido para a **Global Solution -- FIAP**.