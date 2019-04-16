const app = require('express')();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Its a fucking start'));

app.listen(port, () =>
    console.log(`Server up on port ${port}`));