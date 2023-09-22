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
exports.getAll =async (search, from, to) => {
    let cubes = await Cube.find().lean()
    //const result =  cubes
    //.filter(x => x.name?.toLowerCase().includes(search?.toLowerCase() || ''))
    //.filter(x => from ? x.difficultyLevel >= from : true)
    //.filter(x => to ? x.difficultyLevel <= to : true)
//
    return cubes
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
