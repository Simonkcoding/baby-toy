const router = require('express').Router();
const toyController = require('../../controllers/toyController');

// .../api/toy/
router.route("/")
    .get(toyController.findAll) //get all info
    .post(toyController.create); //add entry

// .../api/toy/id
router.route("/:id")
    .get(toyController.findById) // FIND with id
    .put(toyController.update) // change info
    .delete(toyController.delete); // delete entry

router.route('/sendtoy')
    .put(toyController.insertBaby)

router.route("/add/:id")
    .put(toyController.addInterest)

router.route("/remove/:id")
    .put(toyController.removeInterest)

module.exports = router;