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
