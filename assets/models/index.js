// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Category,
    unique: false
  },
  as: 'product_category'
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Product,
    unique: false
  },
  as: 'category_product'
});

// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToMany(Tag, {
  through: {
    model: 
  }
},)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
