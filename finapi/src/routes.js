const Router = require("express").Router;
const { v4: uuid } = require("uuid");
const { verifyIfExistsAccountCPF } = require("./middlewares");

const routes = Router();

const customers = [];

/**
 * cpf - string
 * name - string
 * id - uuid
 * statement - []
 */

/**
 * pega o saldo atual
 * com base no crédito+ e débito-
 * do estrato
 */
function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === "credit") {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0);

  return balance;
}

routes.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const constomerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (constomerAlreadyExists) {
    return response.status(400).json({
      error: "Custumer already exists!",
    });
  }

  try {
    customers.push({
      id: uuid(),
      cpf,
      name,
      statement: [],
    });

    return response.status(201).json();
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

routes.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  return response.status(200).json(customer.statement);
});

routes.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const { description, amount } = request.body;

  const statementOparation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  };

  customer.statement.push(statementOparation);

  return response.status(201).json(customer);
});

routes.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const { amount } = request.body;

  const balance = getBalance(customer.statement);

  if (balance < amount) {
    return response.status(400).json({ error: "Insufficient funds!" });
  }

  const statementOparation = {
    amount,
    created_at: new Date(),
    type: "debit",
  };

  customer.statement.push(statementOparation);

  return response.status(201).json(customer);
});

routes.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const { date } = request.query;

  const dateFormat = new Date(date + " 00:00");

  const statement = customer.statement.filter(
    (statement) =>
      statement.created_at.toDateString() ===
      new Date(dateFormat).toDateString()
  );

  return response.status(200).json(statement);
});

routes.put("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  const { name } = request.body;

  customer.name = name;

  return response.status(201).json(customer);
});

routes.get("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  return response.status(200).json(customer);
});

routes.delete("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  customers.splice(customer, 1);

  // 204
  return response.status(200).json(customers);
});

routes.get("/balance", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;

  const balance = getBalance(customer.statement);

  return response.status(200).json({ saldo: balance, user: customer });
});

module.exports = routes; // zphisher
