const Accessory = require('../models/Accessory');

exports.create = (accessory) => Accessory.create(accessory);

exports.getAll = () => Accessory.find();

exports.getOne = (accessoryId) => Accessory.findById(accessoryId);

exports.getAllWithout = (ids) => Accessory.find({_id: {$nin: ids}});