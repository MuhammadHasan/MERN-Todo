const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// route GET api/item
// desc get all items
// access public

router.get('/', (req, res) => {
    console.log('get items .');
    Item.find()
        .sort({
            date: -1
        })
        .then(items => res.json(items));
});

// route POST api/item
// desc Create Item
// access public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then((item) => res.json(item));
});

// route DELETE api/item/:id
// desc delete an item
// access public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({
                success: true
            }))
        )
        .catch(err => res.status(404).json({
            success: false
        }))
});

module.exports = router;