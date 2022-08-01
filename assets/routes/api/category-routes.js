const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const catagoryData = await Catagory.findAll({
      include: [{ model: Category }]
    }); 
    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category_id = await Catagory.id.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    res.status(200).json(category_id);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category_name = await Category.create(catagory.name, {
      include: [{ model: Category }],
      category_name: req.body.category,
    });
    res.status(200).json(category_name);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category_name = await category_name.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!category_name) {
      res.status(404).json({ message: 'No Category found with that name!' });
      return;
    }

    res.status(200).json(category_name);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
