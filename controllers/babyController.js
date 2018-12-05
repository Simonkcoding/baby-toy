const db = require('../models');

module.exports = {
    insertToy: function (req, res) {

        let babyid = req.body.babyid
        let toyid = req.body.toyid;

        db.Baby.findOneAndUpdate(
            { _id: babyid },
            { $push: { toy: toyid } },
            { new: false })
            .then(Toys => res.json(Toys))
            .catch(err => console.log(err));

        db.Toy.findOneAndUpdate(
            { _id: toyid },
            { $push: { baby: babyid } },
            { new: false })
            .then(Toys => res.json(Toys))
            .catch(err => console.log(err));
    },
    findAll: function (req, res) {
        db.Baby.find()
            .sort({ name: -1 })
            .then(Babys => res.json(Babys))
            .catch(err => console.log(err));
    },
    create: function (req, res) {
        const newBaby = new Baby({
            name: req.body.name,
            love: req.body.love,
            imgurl: req.body.imgurl
        })
        newBaby.save()
            .then(Baby => res.json(Baby))
            .catch(err => console.log(err));
    },
    findById: function (req, res) {
        //wrong
        db.Baby.findOne({ _id: req.params.id })
            .populate('toy')
            .then(Baby => res.json(Baby))
            .catch(err => console.log(err));
    },
    findByName: function (req, res) {
        //wrong
        db.Baby.findOne({ name: req.params.name })
            .populate('toy')
            .then(Baby => res.json(Baby))
            .catch(err => console.log(err));
    },

    update: function (req, res) {
        db.Baby.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(Baby => res.json(Baby))
            .catch(err => console.log(err))
    },
    delete: function (req, res) {
        db.Baby.findOne({ _id: req.params.id })
            .then(Baby => Baby.remove())
            .then(Baby => res.json(Baby))
            .catch(err => console.log(err))
    },
    addInterest: function (req, res) {
        db.Baby.create(req.body)
            .then((interest) => {
                return findOneAndUpdate(
                    { _id: params.id },
                    { $push: { interest: interest._id } },
                    { new: false })
            })
            .then(Baby => res.json(Baby))
            .catch(err => console.log(err))
    },
    removeInterest: function (req, res) {
        db.Baby.findOneAndUpdate(
            { _id: params.Baby },
            { $pull: { interest: req.body._id } },
            { new: false })

            .then(Baby => res.json(Baby))
            .catch(err => console.log(err))
    }
}
