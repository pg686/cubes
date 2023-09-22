const router = require('express').Router();
const cubeService = require('../services/cubeService');
const accessoryService = require('../services/accessoryService');
router.get('/create', (req, res) => {
    res.render('create');
});
router.post('/create', async (req, res) => {
   const cube = req.body;
   if(cube.name.length < 2){
    return res.status(400).send('Invalid request');
   }
try{
  await cubeService.create(cube)
  res.redirect('/');
} catch(err){
    res.status(400).send(err)
}

});
router.get('/details/:id',  async (req, res) => {
    const id = req.params.id;
    const cubeDetails = await cubeService.getOne(id).lean();
    res.render('details', { cubeDetails });
});
router.get('/:id/attach-accessory',  async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();
    const accessories = await accessoryService.getAllWithout(cube.accessories.map(x => x._id)).lean();
    res.render('accessory/attach', {cube, accessories});
});

router.post('/:id/attach-accessory', async  (req, res) => {
    const accessoryId = req.body.accessory;
    await cubeService.attachAccessory(req.params.id, accessoryId);
    res.redirect(`/cube/details/${req.params.id}`);
});

module.exports = router;