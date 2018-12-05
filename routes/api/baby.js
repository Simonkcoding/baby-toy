const router = require('express').Router();
const babyController = require('../../controllers/babyController');

// .../api/baby/
router.route("/")
    .get(babyController.findAll) //get all info
    .post(babyController.create); //add entry

// .../api/baby/id
router.route("/:id")
    // .get(babyController.findById) // FIND with id
    // .put(babyController.update) // change info
    .delete(babyController.delete); // delete entry

router.route("/:name")
    .get(babyController.findByName) // FIND with id

router.route('/sendtoy')
    .put(babyController.insertToy)

router.route("/add/:id")
    .put(babyController.addInterest)

router.route("/remove/:id")
    .put(babyController.removeInterest)

module.exports = router;