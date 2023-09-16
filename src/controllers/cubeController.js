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
  await cubeService.save(cube)
  res.redirect('/');
} catch(error){
    res.status(400).send(err)
}



});
router.get('/details/:id',  (req, res) => {
    const id = req.params.id;
    const cubeDetails = cubeService.getOne(id);
    console.log(cubeDetails, "cubeDetails")
    res.render('details', { cubeDetails });
});

module.exports = router;