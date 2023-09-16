const cubes = require('../db.json');
const fs = require('fs/promises');
const path = require('path');

exports.save = (cube) => {

    cubes.push({ ...cube, id: cubes[cubes.length - 1].id + 1 });
    return fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(cubes, '', 4), { encoding: 'utf-8' });
}

exports.getOne = (cubeId) => {
    return cubes.find(x => x.id == cubeId)
}
exports.getAll = (search, from, to) => {
    const result =  cubes
    .filter(x => x.name?.toLowerCase().includes(search?.toLowerCase() || ''))
    .filter(x => from ? x.difficultyLevel >= from : true)
    .filter(x => to ? x.difficultyLevel <= to : true)

    return result
}