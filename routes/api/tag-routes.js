const router = require('express').Router();
const Tag = require('../../models/Tag');
//const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  const tagData = await Tag.findAll();
  // be sure to include its associated Product data
  // include: [{
  //   model: Product,
  //   through: ProductTag,
  //   include: Category
  // },]
  return res.json(tagData);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const tagData = await Tag.findByPk(req.params.id);
  // be sure to include its associated Product data
  // include: [{
  //   model: Product,
  //   through: ProductTag,
  //   include: Category
  // },]
  return res.json(tagData);
});

router.post('/', async (req, res) => {
  // create a new tag 

  const tagData = await Tag.create({ "tag_name": req.body.tag_name });

  return res.json(tagData);
});

router.put('/:tag_id', async (req, res) => {
  // update a tag's name by its `id` value
  const tagData = await Tag.findByIdAndUpdate(
    {
      id: req.params.tag_id
    },
    {
      tag_name: req.body.tag_name
    },
    {
      new: true
    },
  )
  console.log(tagData);
  return res.json(tagData)
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
