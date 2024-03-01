const express = require('express')
const app = express();
const port = 3000;

const tasks = [
    {
        title: "Apprendre à programmer",
        done: false,
    },
    {
        title: "Faire des courses",
        done: true,
    },
]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.post('/task', (req, res) => {
    tasks.push({
        title: req.body.task,
        done: false
    })
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('todolist', { tasks });
});

app.listen(port , () => {
 console.log(`Serveur lancé sur le port ${port}`);
});