# RENTALX

- repository

  Camada/class encarregado de fazer toda manipulação da aplicação.

  - EX: fazer manipulação do banco de dados (CRUD),

- patterns

  - singleton
    - criar instacias que vão ser globais na aplicação

- Stream

  - permite ler determinado arquivo por _partes_: `chunck`

  - `pipe()`
    - para cada **pedaço/chunk** lido ele vai recever esse pedaço

## Docker

- Dockerfile
  - passo a passo de como irémos rodar a aplicação

| passo                     | descrição                                                               |
| ------------------------- | ----------------------------------------------------------------------- |
| `FROM`                    | imagem que vai ser rodada, é sempre o primeiro comando                  |
| `WORKDIR`                 | o diretório onde as informações vão ficar                               |
| `COPY *file* *dir*`       | copia um arquivo para dentro do diretório                               |
| `RUN command`             | vai executar o comando                                                  |
| `EXPOSE [portnumber]`     | porta onde esse servoço vai estar rodando                               |
| `CMD ['npm','run','dev']` | vai rodar comandos como se fosse no terminal                            |
| `docker build -t rentx .` | vai rodar a imagem, e dar o nome de **rentx** do diretório atual: **.** |
