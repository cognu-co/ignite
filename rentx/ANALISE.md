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

- [x] Deve ser possível cadastrar um novo carro

**RN**

- [x] Não deve ser possível cadastrar um carro com placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- [x] Por padrão, O carro deve ser cadastrado como disponível.
- [x] O usuário responsável pelo cadastro deve ser um administrador.

## Listagem de carros

**RF**

- [x] Deve ser possível listar todos carros disponíveis.
- [x] Deve ser possível listar todos carros disponíveis pelo name da categoria
- [x] Deve ser possível listar todos carros disponíveis pelo nome da marca
- [x] Deve ser possível listar todos carros disponíveis pelo nome do carro

**RN**

- [x] O usuário não precisa estar logado no sistema.

## Cadastro de especificação no carro

**RF**

- [x] Deve ser possível cadastrar uma especificação para um carro.

**RN**

- [x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- [x] O usuário responsável pelo cadastro deve ser um administrador.

## Cadastro de imagens do carro

**RF**

- Deve ser possível cadastrar a imagem do carro.
- [x] Deve ser possível listar todos os carros.

**RNF**

- Utilizar o multer para upload dos arquivos.

**RN**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [x] O usuário responsável pelo cadastro deve ser um administrador.

## Aluguel de carro

**RF**

- Deve ser possível cadastrar um aluguel.

**RNF**

- [x] O aluguel deve ter duração mínima de 24 horas.
- [x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- [x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- [x] O usuário deve estar logado na aplicação.

## devolução de carro

**RF**

- Deve ser possível realizar a devolução de um carro

**RN**

- [x] Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
- [x] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
- [x] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
- [x] Ao realizar a devolução, deve ser calculado o total do aluguel.
- [x] Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
- [x] Caso haja, multa deverá ser somado ao total de aluguel.
- [x] O usuário deve estar logado na aplicação.
