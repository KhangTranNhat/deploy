const productService = require('../service/productService')

const getHomePage =  (req, res) => {
  // const categories = await productService.getCategories();
  return res.render("pages/homePage.ejs" );
};


module.exports = {
  getHomePage
}