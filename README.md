## Atividade 2 - Prontuário

Projeto criado para pôr em prática meus conhecimentos. Nesse projeto é possível:
- logar 
- ver indicador da quantidade de clientes e dos clientes já atendidos 
- ver indicador do número de atendimentos do tipo retorno 
- ver uma lista de clientes que ainda não foram atendidos e atualizá-la
- acessar a página de prontuário referente a um cliente específico 
- adicionar informações a esse cliente..

## Tecnologias

- [x] Linguagem de programação: JavaScript
- [x] ReactJs


### 🎲 Rodando o Front End

```bash

# Clone este repositório usando o terminal com um dos comandos abaixo:
$ git clone <git@github.com:MiqueiasCS/front-conecta-teste.git>
# ou
$ git clone <https://github.com/MiqueiasCS/front-conecta-teste.git>



# entre na pasta do projeto
$ cd front-conecta-teste

# instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento.
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

```

## Paginas

- **"/"**
  - página home 
- **"/login"**
  - página de login
- **"/dashboard"**
  - página de dashboard com os indicadores e a lista de cliente não atendidos
- **"/chart/patient/< id >"**
  - página de prontuário do cliente
  
### observações:
  - Para realizar o login, basta utilizar qualquer string que tenha um formato de **email** válido e a **senha pode ser qualquer valor desde que tenha 4 dígitos**
  - As páginas _/dashboard e /chart/patient/< id >_ só são acessadas pelo usuário logado
  
