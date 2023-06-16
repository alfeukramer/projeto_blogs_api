# Projeto Blogs API

<h3>Neste projeto desenvolvi uma uma API e um banco de dados para a produção de conteúdo para um blog!</h3>

Foi desenvolvido uma aplicação em <b>Node.js</b> usando o pacote sequelize para fazer o <b>CRUD</b> de posts.

Foram desenvolvidos endpoints estão conectados no banco de dados seguindo os princípios do <b>REST</b>;

Para fazer um post é necessário usuário e login, portanto foi trabalhado a relação entre user e post;

É necessário a utilização de categorias para os posts, trabalhando, assim, a relação de posts para categories e de categories para posts.


Utilizei o seguinte <b>Diagrama de Entidade-Relacionamento</b>:
![image](https://github.com/alfeukramer/projeto_blogs_api/assets/87319747/050600db-0413-4a64-b42f-369c4c102d00)


<br /><br />
<h3>Para iniciar a API e o DB com Docker:</h3>

Rode os serviços node e db com o comando <b>docker-compose up -d --build.</b><br />
Esses serviços irão inicializar um container chamado blogs_api e outro chamado blogs_api_db<br /><br />
Use o comando <b>docker exec -it blogs_api bash</b>.<br />
Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.<br /><br />
Instale as dependências com <b>npm install</b>. (Instale dentro do container)<br />
