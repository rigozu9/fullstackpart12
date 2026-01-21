const express = require('express');
const router = express.Router();
const redis = require('../redis')

router.get('/', async (_, res) => {
  const key = 'added_todos'
  const added = Number(await redis.getAsync(key) || 0)

  res.json({ added_todos: added })
});

module.exports = router;
