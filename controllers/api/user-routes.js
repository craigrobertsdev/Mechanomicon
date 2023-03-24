const router = require('express').Router();
const { Car, Service, Technician, User, Workshop } = require('../../models');

router.post('/', (req, res) => {
    // Use Sequelize's `create()` method to add a row to the table
    // Similar to `INSERT INTO` in plain SQL
    Book.create({
      title: req.body.title,
      author: req.body.author,
      is_paperback: true
    })
      .then((newBook) => {
        // Send the newly created row as a JSON object
        res.json(newBook);
      })
      .catch((err) => {
        res.json(err);
      });
  });

router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id);
      
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;