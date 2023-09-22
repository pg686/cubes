const router = require('express').Router();
const cubeService = require('../services/cubeService');

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
router.get('/:id/attack-accessory',  async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();
   // const cubeDetails = await cubeService.getOne(id).lean();
    res.render('accessory/attach', {cube});
});


module.exports = router;