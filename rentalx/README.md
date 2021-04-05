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

| passo                     | descrição                                              |
| ------------------------- | ------------------------------------------------------ |
| `FROM`                    | imagem que vai ser rodada, é sempre o primeiro comando |
| `WORKDIR`                 | o diretório onde as informações vão ficar              |
| `COPY *file* *dir*`       | copia um arquivo para dentro do diretório              |
| `RUN command`             | vai executar o comando                                 |
| `EXPOSE [portnumber]`     | porta onde esse servoço vai estar rodando              |
| `CMD ['npm','run','dev']` | vai rodar comandos como se fosse no terminal           |

---

- commands

| comando                                   | descrição                                                                   |
| ----------------------------------------- | --------------------------------------------------------------------------- |
| `docker ps`                               | lista os containers ativos                                                  |
| `docker build -t rentx .`                 | vai construir a imagem, e dar o nome de **rentx** no diretório atual: **.** |
| `docker run -p 3333:4444 rentx`           | executa a imagem **rentx**                                                  |
| `docker exec -it [imagem_nome] /bin/bash` | vai entrar na raiz da imagem                                                |

---

- `-p`: faz um mapeamento das portas.
  - sempre que for acessado na máquina _local_ o endereço **3333**, vai jogar no enderço do _docker_ na porta **4444**

## docker componse

- compositar/administar uma imagem docker. _ex: definir var ENV_

- docker-compose.yml

| func                                         | descrição                                          |
| -------------------------------------------- | -------------------------------------------------- |
| `VERSION: "3.7"`                             | define a versao do compose                         |
| `services: {}`                               | configurações dos servicos a ser orquestrado       |
| `s: app: {}`                                 | define o nome do serviço                           |
| `s: app: build .`                            | vai executar o comando `build .` no serviço        |
| `s: app: ports: { - 3333:4444 }`             | mapear porta local para o docker                   |
| `s: app: volumes: { - .:/usr/app }`          | de `.` principal dir para o `/usr/app`             |
| `docker-compose up`                          | executa o arquivo do compose ouvindo as alterações |
| `docker-compose up -d`                       | vai ficar executando em background                 |
| `docker-compose logs [IMAGE-NAME: rentx] -f` | vai mostra os logs                                 |

- docker comandos

  - `docker ps -a`: lista todos os containers, mesmo os offlines
  - `docker rm [ID ou NAME]`: vai remover a imagem docker
  - `docker start NAME`: vai iniciar a imagem docker
  - `docker stop ID`: vai para de executar a imagem docker
  - `docker exec -it NAME /bin/bash`: acessa a raiz/DIR da imagem
  - `docker logs NAME -f`: exibe os logs da imagem

- docker compose

  - `docker-compose up id`: subir o container em BG
  - `docker-compose start`: inicia a execução do compose
  - `docker-compose stop`: para de executar o compose
  - `docker-compose down`: remove tudo que foi criado
  - `docker-compose up --force-recreate`: recria com novas configurações
