# schedule_project

# Projeto de Agenda em JavaScript com Backend e Frontend

Este é um projeto de uma agenda desenvolvido em JavaScript, utilizando as tecnologias EJS, Bootstrap, Webpack e Express. O projeto possui um frontend interativo onde é possível criar, editar e excluir contatos. Além disso, é possível criar uma conta de usuário e fazer login para gerenciar os contatos de forma personalizada.

## Funcionalidades Principais

1. *Cadastro de Usuário:* Os usuários têm a opção de criar uma conta personalizada, fornecendo um nome de usuário e uma senha. Essas informações são armazenadas no banco de dados para autenticação futura.

2. *Autenticação de Usuário:* Os usuários registrados podem fazer login utilizando suas credenciais. O sistema verifica se as informações fornecidas correspondem aos registros armazenados no banco de dados e, se forem válidas, permite que o usuário acesse a agenda.

3. *Criação de Contatos:* Os usuários autenticados podem adicionar novos contatos à agenda, fornecendo informações como nome, telefone e endereço. Esses dados são armazenados no banco de dados, vinculados ao usuário logado.

4. *Edição de Contatos:* Os usuários podem editar as informações dos contatos existentes, como nome, telefone e endereço. As alterações são atualizadas no banco de dados, mantendo a consistência dos dados.

5. *Exclusão de Contatos:* Os usuários podem remover contatos da agenda. A exclusão é realizada tanto no banco de dados quanto na interface do usuário.

## Configuração do Projeto

Antes de executar o projeto, é necessário configurar uma variável de ambiente para conectar o aplicativo com o MongoDB. Certifique-se de criar um arquivo `.env` na raiz do projeto e defina a seguinte variável:


MONGODB_URI=sua_url_de_conexão_com_o_mongodb


Substitua `sua_url_de_conexão_com_o_mongodb` pela URL de conexão adequada ao seu ambiente MongoDB.

## Instalação e Execução

Siga os passos abaixo para executar o projeto localmente:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone este repositório para o seu diretório local:


git clone https://github.com/seu-usuario/nome-do-repositorio.git


3. Navegue até o diretório do projeto:


cd nome-do-repositorio


4. Instale as dependências do projeto:


npm install


5. Inicie o servidor:


npm start


6. Abra seu navegador e acesse `http://localhost:3000` para visualizar a aplicação da agenda.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, correções de bugs ou novas funcionalidades para adicionar, sinta-se à vontade para abrir um pull request. Farei o possível para analisar e incorporar as contribuições relevantes ao projeto.

Espero que este projeto seja útil e ajude você a entender melhor o desenvolvimento de uma aplicação web usando JavaScript, EJS, Bootstrap, Webpack e Express. Divirta-se explorando e aprimorando a agenda!
