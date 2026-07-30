const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "books.json");

function readBooks() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, "[]");
    }

    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function saveBooks(books) {
    fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
}

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/books") {
        try {
            const books = readBooks();
            res.writeHead(200);
            res.end(JSON.stringify(books));
        } catch {
            res.writeHead(500);
            res.end(JSON.stringify({ error: "File read error" }));
        }
    }

    else if (req.method === "POST" && req.url === "/books") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const books = readBooks();
                const newBook = JSON.parse(body);

                newBook.id = books.length ? books[books.length - 1].id + 1 : 1;

                books.push(newBook);
                saveBooks(books);

                res.writeHead(201);
                res.end(JSON.stringify(newBook));
            } catch {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });
    }

    else if (req.method === "DELETE" && req.url.startsWith("/books/")) {
        try {
            const books = readBooks();
            const id = parseInt(req.url.split("/")[2]);

            const index = books.findIndex(book => book.id === id);

            if (index === -1) {
                res.writeHead(404);
                return res.end(JSON.stringify({ error: "Book not found" }));
            }

            books.splice(index, 1);
            saveBooks(books);

            res.writeHead(200);
            res.end(JSON.stringify({ message: "Book deleted" }));
        } catch {
            res.writeHead(500);
            res.end(JSON.stringify({ error: "File error" }));
        }
    }

    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Invalid route" }));
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});