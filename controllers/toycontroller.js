const db = require('../models');

module.exports = {
    insertBaby: function (req, res) {
        
    },
    findAll: function (req, res) {
        db.Toy.find()
            .sort({ date: -1 })
            .then(Toys => res.json(Toys))
            .catch(err => console.log(err));
    },
    create: function (req, res) {
        const newToy = new Toy({
            name: req.body.name,
            age: req.body.age,
            address: req.body.address
        })
        newToy.save()
            .then(Toy => res.json(Toy))
            .catch(err => console.log(err));
    },
    findById: function (req, res) {
        // //wrong

        // db.Toy.aggregate([
        //     {
        //        $unwind: "$baby"
        //     },
        //     {
        //        $lookup:
        //           {
        //              from: "Baby",
        //              localField: "baby",
        //              foreignField: "name",
        //              as: "baby_own"
        //          }
        //     },
        //     {
        //        $match: { "baby_own": { $ne: [] } }
        //     }
        //  ]).then(Toy => res.json(Toy))
        //  .catch(err => console.log(err));

        db.Toy.findOne({ _id: req.params.id })
            // .populate('baby')
            .then(Toy => res.json(Toy))
            .catch(err => console.log(err));
    },
    update: function (req, res) {
        db.Toy.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(Toy => res.json(Toy))
            .catch(err => console.log(err))
    },
    delete: function (req, res) {
        db.Toy.findOne({ _id: req.params.id })
            .then(Toy => Toy.remove())
            .then(Toy => res.json(Toy))
            .catch(err => console.log(err))
    },
    addInterest: function (req, res) {
        db.Toy.create(req.body)
            .then((interest) => {
                return findOneAndUpdate(
                    { _id: params.id },
                    { $push: { interest: interest._id } },
                    { new: false })
            })
            .then(Toy => res.json(Toy))
            .catch(err => console.log(err))
    },
    removeInterest: function (req, res) {
        db.Toy.findOneAndUpdate(
            { _id: params.Toy },
            { $pull: { interest: req.body._id } },
            { new: false })

            .then(Toy => res.json(Toy))
            .catch(err => console.log(err))
    }
}
