const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('pages/index.html', { root: __dirname })
})

app.get('/:slug', (req, res) => {
    if (req.params.slug == "about"){
        res.sendFile('pages/about.html', { root: __dirname })
    }
    else if (req.params.slug == "contact-me"){
        res.sendFile('pages/contacts.html', { root: __dirname })
    }
    else {
        res.sendFile('pages/404.html', { root: __dirname })
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
