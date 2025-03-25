const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/:slug', (req, res) => {
    if (req.params.slug == "about"){
        res.send('this is about page')
    }
    else if (req.params.slug == "contact-me"){
        res.send("this is my contact page")
    }
    else {
        res.send('oops page not found')
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
