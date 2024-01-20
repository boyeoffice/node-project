module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.send('This is from product');
  });
}