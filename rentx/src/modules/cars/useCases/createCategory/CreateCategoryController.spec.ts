import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;
describe("Create Category controller", () => {
  beforeEach(async () => {
    connection = await createConnection();
    // await connection.runMigrations();

    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(
      `INSERT INTO users(id, name, email, password, driver_license,"isAdmin", created_at) VALUES('${id}', 'admin', 'admin@rentx.com.br', '${password}', 'NUL-000', true, 'now()')`
    );
  });

  it("should be able to create a new category", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@rentx.com.br",
      password: "admin",
    });

    console.log(`TOKEN RESPONSE${responseToken}`);

    const response = await request(app).post("/categories").send({
      name: "Category Supertest",
      description: "New Category Supertest description",
    });

    expect(response.status).toBe(201);
  });
});
