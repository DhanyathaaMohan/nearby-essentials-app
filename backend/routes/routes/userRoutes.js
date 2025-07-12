const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/favorites', userController.addToFavorites);
router.post('/search-history', userController.addToSearchHistory);

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use('/api/users', require('./routes/userRoutes'));

mongoose.connect('mongodb+srv://raga:raga123@localfinder.krsljyz.mongodb.net')
  .then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'));
  });
