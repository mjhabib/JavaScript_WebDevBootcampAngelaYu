import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

function calculateDate(){
    var d = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    var today = days[d.getDay()]
    var month = months[d.getMonth()]
    var day = d.getDate()

    var fullDate = today + ", " + month + " " + day
    return fullDate
}

var calcDate = calculateDate();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs', {calcDate})
})

app.get('/work', (req, res) => {
    res.render('work.ejs', {calcDate})
})


var allTasks = []
var i = 0

app.post('/', function (req, res) {

    if (req.body['taskName'] != ''){
        allTasks.push(req.body['taskName'])    
        res.render('index.ejs', {todayTask: allTasks[i], calcDate})
        i++
    } 
})


var allWorkTasks = []
var j = 0

app.post('/work', function (req, res) {

    if (req.body['taskName'] != ''){
        allWorkTasks.push(req.body['taskName'])    
        res.render('work.ejs', {workTask: allWorkTasks[j], calcDate})
        j++
    } 
})


app.listen(port, () =>{
    console.log(`We are online on port ${port}.`)

    // this is for the git, github and version controls section of course to create commit version 2!
    console.log('ONLY FOR LEARNING PURPOSES!')
})

