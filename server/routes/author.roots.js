const authorControllers=require("../controllers/author.controller")

module.exports=(app)=>{
    app.get("/authors",authorControllers.getAuthor)
    app.get("/authors/:id",authorControllers.getOneAuthor)
    app.post("/authors/new",authorControllers.createAuthor)
    app.patch("/authors/:id/new",authorControllers.updateAuthor)
    app.delete("/authors/:id/edit",authorControllers.deleteAuthor)
}