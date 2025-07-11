# nearby-essentials-app
# MongoDB Mongoose Models

This folder contains Mongoose schemas for the Local Finder project.

## Models

- `User`: Handles user email, password, location, bookmarks, and search history.
- `Place`: Represents places with name, image, type, location, rating, and budget.

## Usage

Import into backend like this:
```js
const User = require('./models/User');
const Place = require('./models/Place');



