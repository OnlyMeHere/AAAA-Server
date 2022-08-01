// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: 'Category',
    key: 'id',
  },
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: 'Product',
    key: 'id'
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: 'Product',
    key: 'id'
  }
}),


// Products belongToMany Tags (through ProductTag)
ProductTag.belongsToMany(Tag, {
  through: {
    model: 'Product',
    key: 'id'
  }
}),


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
