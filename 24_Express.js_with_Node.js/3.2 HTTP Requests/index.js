import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1> Hello to your very first web-app </h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1> About me page! </h1>')
})

app.get('/contact', (req, res) => {
    res.send('<h1> Contact me page! </h1>')
})

app.listen(port, () => {
    console.log(`The app is running on port ${port}.`)
})