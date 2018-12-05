const router = require('express').Router();
const toycontroller = require('../../controllers/toycontroller');

// .../api/toy/
router.route("/")
    .get(toycontroller.findAll) //get all info
    .post(toycontroller.create); //add entry

// .../api/toy/id
router.route("/:id")
    .get(toycontroller.findById) // FIND with id
    .put(toycontroller.update) // change info
    .delete(toycontroller.delete); // delete entry

router.route('/sendtoy')
    .put(toycontroller.insertBaby)

router.route("/add/:id")
    .put(toycontroller.addInterest)

router.route("/remove/:id")
    .put(toycontroller.removeInterest)

module.exports = router;