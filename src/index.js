const express = require('express');

const app = express();
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.send('AAA')
});

app.listen(5000, () => console.log('App is listening on post 5000'));