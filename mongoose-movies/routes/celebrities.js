const express = require("express");
const Celebrity = require("../models/Celebrity");

const router = express.Router();

/* GET Show a form to create a celebrity */
router.get("/new", (req, res, next) => {
  // console.log("hola");
  res.render("celebrities/new");
});

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

/* POST Send the data from the form to this route to create the celebrity and save to the database */
// router.post("/", (req, res, next) => {
//   const { name, occupation, catchPhrase } = req.body;
//   Celebrity.create({
//     name,
//     occupation,
//     catchPhrase
//   })
//     .then(celebrity => {
//       console.log("hola1");
//       res.redirect("celebrities");
//     })
//     .catch(next);
// });

router.post("/", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, catchPhrase });
  newCelebrity
    .save()
    .then(addedCelebrity => {
      res.redirect("celebrities");
    })
    .catch(error => {
      res.render("celebrities/new");
    });
});

router.post("/:celebrityId/delete", (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findByIdAndDelete(celebrityId)
    .then(() => {
      res.redirect("celebrities");
    })
    .catch(next);
});

router.get("/:celebrityId/edit", (req, res, next) => {
  const { celebrityId } = req.params;
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity });
    })
    .catch(next);
});

router.post("/:celebrityId", (req, res, next) => {
  console.log("hola1");
  const { celebrityId } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.update(
    { _id: celebrityId },
    { $set: { name, occupation, catchPhrase } },
    { new: true }
  )
    .then(() => {
      res.redirect(`/celebrities/${celebrityId}`);
    })
    .catch(next);
});

module.exports = router;
