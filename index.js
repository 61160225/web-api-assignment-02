const express = require('express')
const app = express()

app.use(express.json())
let books = []

app.post('/books', (req, res) => {
    let newTitle = req.body.title
    let newPrice = req.body.price
    let newUnit = req.body.unit
    let newIsbn = req.body.isbn
    let newImage = req.body.image_url

    let newBook = {
        title: newTitle,
        price: newPrice,
        unit: newUnit,
        isbn: newIsbn,
        image_url: newImage,
    }

    let bookID = 0


    books.push(newBook)


    bookID = books.length - 1

 

    res.status(201).json(bookID)
})

const port = 3000
app.listen(3000, () => console.log(`Server started at ${port}`))

/*
{
    "title": "Last Day",
    "price": "7.99",
    "unit":10,
    "isbn":"978-1542016353",
    "imageurl":"https://images-na.ssl-images-amazon.com/images/I/41AUKdIpuWL._SX329_BO1,204,203,200_.jpg"
}
*/