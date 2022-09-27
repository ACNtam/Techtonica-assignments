import { json, Router } from "express";
import books from "../db/books.mjs";

// parse json data
//let books = JSON.parse(BOOKS)

const router = Router()

//get all books 
router.get("/books", (req, res) => {
    //server is sending a response with all books
    res.json(books)
})

// Create a book
router.post("/books", (req, res) => {
    //extract data from the request body
    const isbn = req.body.isbn
    const title = req.body.title
    const author = req.body.author
    const format = req.body.format

    // convert our data to json format
    let book = {
        isbn, title, author, format
    }

    //adding new book to the books array
    books.push(book)

    //sending a message response
    res.json({
        message: "Book created successfully"
    })
})

// get book info by id, one book
router.get("/books/:id", (req, res) => {
    let id = req.params.id

    // use filter books array so we can return only books that match our condition 
    //(where id is = book isbn) 
    let filtered = books.filter((book) => {
        return book.isbn == id
    })

    //responding with a book that was filtered
    return res.json(filtered[0])
})
// put to update
router.put("/books/:id", (req, res) => {
    let id = req.params.id

    //get items to edit using destructor method, isbn removed bc its constant
    // (they are all variables but one line created all variables)
    let {title,author,format} = req.body


    // use find books array so we can return only books that match our condition 
    //(where id is = book isbn) 
    let filtered = books.find((book) => {
        return book.isbn == id
    })

    //update the filtered book
    filtered.title = title
    filtered.author = author
    filtered.format = format

    //responding with a book that was filtered
    return res.json({
       message : "Book updated successfully"
    })
})

// delete book by id
router.delete("/books/:id", (req, res) => {
// get the book index from books array by findIndex method
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    const bookIndex = books.findIndex((book)=>{
        return book.isbn == req.params.id
    })

    // delete book from books array using splice
    books.splice(bookIndex, 1)
    return res.json({
        message: "Book deleted"
    })
})











export default router