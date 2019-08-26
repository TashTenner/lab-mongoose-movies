const express = require("express");
const Celebrity = require("../models/Celebrity");

const router = express.Router();

/* GET celebrities listing. */
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      console.log("celebrities", celebrities);
      res.render("celebrities/index", { celebrities });
    })
    .catch(next);
});

/* GET celebrities details. */
router.get("/:celebrityId", (req, res, next) => {
  const { celebrityId } = req.params;

  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render("celebrities/show", { celebrity });
    })
    .catch(next);
});

module.exports = router;

// router.get("/new", (req, res) => {
//   res.render("new");
// });

// router.get("/:bookId", (req, res, next) => {
//   const { bookId } = req.params;

//   Book.findById(bookId)
//     .then(book => {
//       if (book) {
//         const rating = [];
//         for (let i = 0; i < book.rating; i++) {
//           rating.push("⭐️");
//         }
//         res.render("bookDetail", { book, rating });
//       } else {
//         const error = new Error("nada por aqui");
//         Error.status = 404;
//         // next(error);
//         throw error;
//       }
//     })
//     .catch(next);
// });

// router.post("/", (req, res, next) => {
//   const { title, author, description, rating } = req.body;
//   Book.create({
//     title,
//     author,
//     description,
//     rating
//   })
//     .then(book => {
//       console.log("book", book);
//       res.redirect(`/books/${book._id}`);
//     })
//     .catch(next);
// });

// router.get("/:bookId/update", (req, res, next) => {
//   const { bookId } = req.params;
//   Book.findById(bookId)
//     .then(book => {
//       res.render("edit", book);
//     })
//     .catch(next);
// });

// router.post("/:bookId", (req, res, next) => {
//   const { bookId } = req.params;
//   const { title, author, description, rating } = req.body;
//   Book.findByIdAndUpdate(bookId)
//     .then(book => {
//       console.log("book in update", book);
//       res.redirect(`/books/${bookId}`);
//     })
//     .catch(next);
// });

// router.post("/:bookId/delete", (req, res, next) => {
//   const { bookId } = req.params;
//   Book.findByIdAndDelete(bookId)
//     .then(() => {
//       res.redirect("/books");
//     })
//     .catch(next);
// });
