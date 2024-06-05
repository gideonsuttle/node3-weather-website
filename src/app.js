const path = require('path')
const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const request = require('postman-request')

const app = express()

//Define paths for express config
const viewsPath = path.join(__dirname, '../Templates/views')
const publicDirectoryPath = path.join(__dirname, '../public')
const partialPath = path.join(__dirname, '../Templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/products', (req, res) => {
    if(!req.query.search){
// Or use else instead of return
        return res.send({
            error: 'You must provide a search term'
        })
    }
    

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather ',
        name : 'Gideon Suttle'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name : 'Gideon Suttle'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helptext: 'This is some helpful text!!',
        title: 'Help',
        name: 'Gideon Suttle'
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send({
            error: "Provide a valid address."
        })
    }

    const address = req.query.address

    geocode(address, (error, {latitude, longitude, country, state, city} = {}) => {
        if(error){
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                res.send({error})
            }
            res.send({
                location: country+ ', '+ state+ ' ,' +city,
                forecast: forecastData,
                address
            })
        })
    })
})

app.get('/help/*', (req, res) => {

    res.render('404',{
        title: '404',
        name: 'Gideon Suttle',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {

    res.render('404',{
        title: '404',
        name: 'Gideon Suttle',
        errorMessage: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server up on port ' +port)
})