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

module.exports = routes;
