const User = require('../mongo-schemas/user');

exports.addToFavorites = async (req, res) => {
  const { userId, placeId } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $addToSet: { favorites: placeId }  // prevents duplicates
    }, { new: true });

    res.status(200).json({ message: 'Place added to favorites', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add favorite' });
  }
};
exports.addToSearchHistory = async (req, res) => {
  const { userId, placeId } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      $push: {
        searchHistory: {
          place: placeId,
          searchedAt: new Date()
        }
      }
    }, { new: true });

    res.status(200).json({ message: 'Search history updated', user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update search history' });
  }
};
