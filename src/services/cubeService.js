const fs = require('fs/promises');
const path = require('path');
const Cube = require('../models/Cube');

exports.create = (cube) => Cube.create(cube);

exports.getOne = (cubeId) => Cube.findById(cubeId);
exports.getAll =async (search, from, to) => {
    let cubes = await Cube.find().lean()
    //const result =  cubes
    //.filter(x => x.name?.toLowerCase().includes(search?.toLowerCase() || ''))
    //.filter(x => from ? x.difficultyLevel >= from : true)
    //.filter(x => to ? x.difficultyLevel <= to : true)
//
    return cubes
}