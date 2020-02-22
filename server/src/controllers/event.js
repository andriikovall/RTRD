const Event = require('../models/Event');
const handler = require('../errorHandler');
const config = require('../config');

module.exports.getAll = async function(req, res) {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (e) {
        handler.catch(res, e);
    }
};

module.exports.getById = async function(req, res) {
    try {
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
    } catch (e) {
        handler.catch(res, e);
    }
};

module.exports.create = async function(req, res) {
    try {

        const event = new Event(req.body);
        await event.save();
        res.status(201).json(event);

    } catch (e) {
        handler.catch(res, e);
    }
};

module.exports.update = async function(req, res) {
    try {

        const updated = req.body;

        category = await Category.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: updated
        }, {
            new: true
        })
        res.status(200).json(category)


    } catch (e) {
        handler.catch(res, e);
    }
};

module.exports.delete = async function(req, res) {
    try {
        await Event.remove({
            _id: req.params.id,
        });
        res.status(200).json({
            message: 'user was deleted',
        });
    } catch (e) {
        handler.catch(res, e);
    }
};