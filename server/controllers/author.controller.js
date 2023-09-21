const author = require("../models/author.model");

module.exports = {
    createAuthor: (request, response) => {
        const { name } = request.body;
        author.create({
            name:name
        })
            .then(author => response.json(author))
            .catch(err => response.status(400).json(err))
    }
}

module.exports.getAuthor = (req, res) => {
    author.find()
        .then((allAuthors) => res.json(allAuthors))
        .catch((err) => res.status(400).json(err));
};


module.exports.getOneAuthor = (req, res) => {
    author.findOne({_id:req.params.id})
        .then((singleAuthor) => res.json(singleAuthor))
        .catch((err) => res.status(400).json(err));
};
module.exports.updateAuthor = (req, res) => {
    author.updateOne({ _id: req.params.id }, req.body)
        .then((updatedAuthor) => {
            res.json(updatedAuthor);
        })
        .catch((err) => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
    author.deleteOne({ _id: req.params.id })
        .then((deleteAuth) => {
            res.json(deleteAuth);
        })
        .catch((err) => res.status(400).json(err));
};
