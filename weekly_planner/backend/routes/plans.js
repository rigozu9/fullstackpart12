const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Here are your plans for the 123week!!!!!!!!!!!")
})

module.exports = router