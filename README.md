Sobre o Projeto:

Este projeto é uma vitrine de produtos onde os usuários podem visualizar, filtrar e adicionar itens ao carrinho. A aplicação segue o layout fornecido e implementa funcionalidades como:

Exibição de produtos a partir de um JSON mockado (done)
Filtros dinâmicos para facilitar a busca (em andamento)
Pagina com a possibilidade de carregar mais produtos "Carregar mais produtos" (done)
Carrinho funcional (to be done)

## Tecnologias

React + TypeScript
Styled Components para estilização
Zustand para gerenciamento de estado (se aplicável)

Para rodar o projeto:
Pre-requisitos:
Node.js instalado (versão 18+ recomendada -> utilizei a v18.14.0)
Gerenciador de pacotes npm ou yarn

Clonar o repositório:
git clone [https://github.com/CarolFlopes/case-soma.git]
cd nome-do-projeto

## Instalar dependencias:

npm install

# ou

yarn install

## Rodar o projeto:

npm start
estará disponivel em http://localhost:3000

## Estrutura do Projeto:

/src
│── components/ # Componentes reutilizáveis
│── views/ # Páginas da aplicação
│── styles/ # Estilização global e temas
│── data/ # Mock de dados (products.json)
│── hooks/ # Hooks customizados (Zustand)
│── App.tsx # Componente principal
│── main.tsx # Entrada do React

## Funcionalidades

Listagem de produtos dinâmica
Botão "Carregar mais"

## Decisões Técnicas:

Componentização: Separação de componentes reutilizáveis para melhor manutenção.
Gerenciamento de estado: (Zustand, useState dependendo da sua escolha).
Styled Components: Utilizado para organização modular dos estilos.
Performance: Implementação de botao para carregar mais itens para melhorar o carregamento inicial da pagina.

## Próximos Passos

Finalizar implementação do carrinho
Completar sistema de filtros
Adicionar testes unitários
Implementar responsividade avançada

## Como Contribuir:

Faça um fork do repositório
Crie sua branch (git checkout -b feature/nova-funcionalidade)
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade')
Push para a branch (git push origin feature/nova-funcionalidade)
Abra um Pull Request
