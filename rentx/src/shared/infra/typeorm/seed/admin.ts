import { getConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

async function create() {
  const connection = getConnection();

  const id = uuidV4();

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, admin, created_at) VALUES()`
  );
}
