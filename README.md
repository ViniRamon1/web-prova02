# API de Gerenciamento de Alimentos

Esta API é desenvolvida para gerenciar informações sobre alimentos em um sistema de estoque. Utiliza o framework Express.js para criar as rotas da API e o banco de dados MongoDB para armazenar os alimentos.

## Instalação

1. Certifique-se de ter o Node.js e o MongoDB instalados em seu sistema.
2. Clone este repositório:

```bash
git clone https://github.com/seuusuario/api-gerenciamento-alimentos.git
```
3. Instale as dependências do projeto:
```bash
cd api-gerenciamento-alimentos
npm install
```

4. Configure a string de conexão com o MongoDB no arquivo app.js:
```javascript 
mongoose.connect('sua-string-de-conexao', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
```
5. Inicie o servidor:
```bash
npm start
```
A API estará disponível em http://localhost:3000/api/foods

Rotas da API
```bash
Listar todos os alimentos (GET): /api/foods

Retorna uma lista de todos os alimentos no banco de dados.
Campos de Resposta:
id: ID único do alimento
name: Nome do alimento
category: Categoria do alimento
quantity: Quantidade disponível
expirationDate: Data de validade
price: Preço do alimento
Buscar um alimento específico (GET): /api/foods/:id

Retorna os detalhes de um alimento com base no ID fornecido.
Campos de Resposta: (mesmos que acima)
Criar um novo alimento (POST): /api/foods

Cria um novo alimento com base nos dados fornecidos.
Campos de Requisição:
name: Nome do alimento (String)
category: Categoria do alimento (String)
quantity: Quantidade disponível (Number)
expirationDate: Data de validade (Date)
price: Preço do alimento (Number)
Atualizar um alimento existente (PUT): /api/foods/:id

Atualiza os dados de um alimento existente com base no ID fornecido.
Campos de Requisição (opcionais): (mesmos que acima)
Excluir um alimento (DELETE): /api/foods/:id

Remove um alimento com base no ID fornecido.
Testando a API
Você pode testar as rotas da API utilizando ferramentas como Postman, Thunder Client ou Insomnia.
```