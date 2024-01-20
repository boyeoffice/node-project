const ProductsService = require("../services/product.service");

module.exports = (app) => {
  const service = new ProductsService();

  app.get("/", async (req, res, next) => {
    try {
      const data = await service.GetProducts();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(404).json({ error });
    }
  });
}