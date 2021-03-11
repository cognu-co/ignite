const customers = [{ name: "eliasallex", cpf: "123.123.123", statement: [] }];

module.exports = (request, response, next) => {
  const { cpf } = request.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({
      error: "Custumer not found!",
    });
  }

  request.customer = customer;

  return next();
};
