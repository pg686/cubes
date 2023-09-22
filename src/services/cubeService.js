const Cube = require('../models/Cube');
const accessoryService = require('../services/accessoryService');

exports.create = (cube) => Cube.create(cube);
exports.getOne = (cubeId) =>  Cube.findById(cubeId).populate('accessories');
//exports.getOne = (cubeId) =>  Cube.findById(cubeId).populate({
//    path: 'accessories',
//    populate: {
//        path: 'cubes',
//        model: 'Cube'
//    }
//    });
exports.getAll =async (search, fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;

    let cubes = await Cube.find({
        name: { $regex: new RegExp(search, 'i') },
        difficultyLevel: { $gte: from, $lte: to }
    }).lean();
    return cubes;
}
exports.attachAccessory = async (cubeId, accessoryId) => {
    const accessory = await accessoryService.getOne(accessoryId);
    const cube = await Cube.findById(cubeId);
     cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();
    return cube;

}
