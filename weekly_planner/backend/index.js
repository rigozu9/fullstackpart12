const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const plansRouter = require('./routes/plans')

app.use(cors())
app.use(express.json())

app.use('/plans', plansRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})