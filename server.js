const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient 
const uri = "mongodb+srv://admin:admin@cluster0-5ryvj.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('crud-nodejs')

  app.listen(3000, () => {
    console.log('server running on port 3000')
    })
})

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.listen(3000, function(){
    console.log('server running on port 3000')
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/show', (req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/')
    })
})