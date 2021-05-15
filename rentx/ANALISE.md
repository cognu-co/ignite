# Requisitos da aplicação

examples

- [x] RF: ex user vai poder cadastrar uma categoria, recuperar a senha do email...

- [x] RNF: ex: os dados vão ser armazenados em PG/MySQL, as Libs...

- [x] RN: como vai funcionar a aplicação.

**RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais

**RN** => Regras de negócio

## Cadastro de carros

**RF**

- Deve ser possível cadastrar um novo carro
- Deve ser possível listar todas as categorias

**RN**

- Não deve ser possível cadastrar um carro com placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- Por padrão, O carro deve ser cadastrado como disponível.
- O usuário responsável pelo cadastro deve ser um administrador.

## Listagem de carros

**RF**

- Deve ser possível listar todos carros disponíveis.
- Deve ser possível listar todos carros disponíveis pelo name da categoria
- Deve ser possível listar todos carros disponíveis pelo nome da marca
- Deve ser possível listar todos carros disponíveis pelo nome do carro

**RN**

- O usuário não precisa estar logado no sistema.

## Cadastro de especificação no carro

**RF**

- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**RN**

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um administrador.

## Cadastro de imagens do carro
