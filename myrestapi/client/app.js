window.onload = () => {
    fetchBooks()
    const addForm = document.querySelector("#add-form")
    const editForm = document.querySelector("#edit-form")
    addForm.addEventListener("submit", (e) => {
        e.preventDefault()

        //getting all input values
        let inputs = e.target.elements
        let data = {}
        for (let i = 0; i < inputs.length; i++) {
            let el = inputs.item(i)
            data[el.name] = el.value
        }
        addBook(data)
    })
    editForm.addEventListener("submit", (e) => {
        e.preventDefault()

        //getting all input values
        let inputs = e.target.elements
        let data = {}
        for (let i = 0; i < inputs.length; i++) {
            let el = inputs.item(i)
            data[el.name] = el.value
        }
        editBook(data)
    })

}

function fetchBooks() {
    fetch('/books')
        .then((response) => response.json())
        .then((data) => displayBooks(data))
        .catch((error) => {
            alert('Failed to load books');
            //console.log(error)
        });
}
//to print books on the page
function displayBooks(books) {
    let tbody = document.querySelector("tbody")
    tbody.innerHTML = ""

    //loop
    books.forEach(book => {
        let tr = document.createElement("tr")
        let content = `
        <td>${book.isbn}</td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.format}</td>
                    <td><button onclick="openEdit('${book.isbn}')">Edit</button> 
                        <button onclick="deleteBook(event,'${book.isbn}')">Delete</button>
                    </td>`
        tr.innerHTML = content
        tbody.appendChild(tr)
    });
}

function deleteBook(e, id) {
    fetch('/books/' + id, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message)
            fetchBooks()
        })
        .catch((error) => {
            alert("Failed to delete");
        });

}

function addBook(book) {
    fetch('/books', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    })
        .then((response) => response.json())
        .then((data) => {
            alert('Book added successly');
            fetchBooks()
        })
        .catch((error) => {
            alert('Failed to add a book');

        });
}
// opening the edit modal 
function openEdit(id) {
    modal.style.display = "block";

    fetch('/books/' + id,)
        .then((response) => response.json())
        .then((data) => {
    document.querySelector("#edit-form .isbn").value = data.isbn
    document.querySelector("#edit-form .title").value = data.title
    document.querySelector("#edit-form .author").value = data.author
    document.querySelector("#edit-form .format").value = data.format

        })
        .catch((error) => {
            alert("Failed to load book");
        });
}
function editBook(book){
    fetch('/books/'+book.isbn, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    })
        .then((response) => response.json())
        .then((data) => {
            modal.style.display = "none";
            alert('Book updated successly');
            fetchBooks()
        })
        .catch((error) => {
            alert('Failed to update a book');

        });
}