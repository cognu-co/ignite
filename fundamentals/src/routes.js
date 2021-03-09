const { Router } = require("express");

const routes = Router();

routes.get("/users", (req, res) => {
  return res.json({ ok: true });
});
routes.patch("/users/:uuid", (req, res) => {
  const { uuid } = req.params;
  return res.json({ user: uuid, "user-status": "UPDATED" });
});
routes.get("/users/:uuid", (req, res) => {
  const { uuid } = req.params;
  const { node_resource } = req.query;
  return res.json({
    user: uuid,
    "user-status": "UPDATED",
    node: node_resource,
  });
});

module.exports = routes;
