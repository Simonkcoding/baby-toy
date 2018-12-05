const router = require('express').Router();
const babycontroller = require('../../controllers/babycontroller');

// .../api/baby/
router.route("/")
    .get(babycontroller.findAll) //get all info
    .post(babycontroller.create); //add entry

// .../api/baby/id
router.route("/:id")
    // .get(babyController.findById) // FIND with id
    // .put(babyController.update) // change info
    .delete(babycontroller.delete); // delete entry

router.route("/:name")
    .get(babycontroller.findByName) // FIND with id

router.route('/sendtoy')
    .put(babycontroller.insertToy)

router.route("/add/:id")
    .put(babycontroller.addInterest)

router.route("/remove/:id")
    .put(babycontroller.removeInterest)

module.exports = router;