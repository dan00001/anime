const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize')

let receipes = [];

app.use(cors());

const sequelize = new Sequelize('anime', 'username', 'password', {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
    console.log("Unable to connect to database")
})

const Story = sequelize.define('story',{
    name: sequelize.STRING,
    description: sequelize.STRING
})
const Anime = sequelize.define('anime', {
    name: Sequelize.STRING,
    episodes: Sequelize.INTEGER,
    story: Sequelize.STRING
})


Anime.belongsTo(Story, {foreignKey: 'storyId', targetKey: 'id'})

app.use('/', express.static('frontend'))


app.use(express.json()); 

app.use(express.urlencoded())

app.get('/createdb', (request, response) => {
    sequelize.sync({force:true}).then(() => {
        response.status(200).send('tables created')
    }).catch((err) => {
        console.log(err)
        response.status(200).send('could not create tables')
    })
})

async function geStories(request, response) {
    try {
        let stories = await Story.findAll();
        response.status(200).json(category)
    } catch(err) {
        response.status(500).send('something went wrong')
    }
}

app.get('/stories', getStories)

app.get('/stories/:id', function(request, response) {
    Story.findOne({where: {id:request.params.id}}).then(function(category) {
        if(story) {
            response.status(200).send(story)
        } else {
            response.status(404).send()
        }
    })
})


//add a new anime stories
app.post('/stories', function(request, response) {
    Story.create(request.body).then(function(category) {
        response.status(201).send(category)
    })
})

app.delete('/stories/:id', function(request, response) {
    Story.findByPk(request.params.id).then(function(story) {
        if(story) {
            category.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Story not found')
        }
    })
})


app.get('/animes', function(request, response) {
    Anime.findAll(
        {
            include: [{
                model: Story,
                where: { id: Sequelize.col('anime.storyId') }
            }, {
                model: Category,
                where: { id: Sequelize.col('anime.id')},
                required: false
            }]
        }
        
        ).then(
            function(anime) {
                response.status(200).send(anime)
            }
        )
})

app.put('/stories/:id', function(request, response) {
    Story.findByPk(request.params.id).then(function(story) {
        if(story) {
            story.update(request.body).then(function(story){
                response.status(201).send(story)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Story not found')
        }
    })
})

app.post('/animes', function(request, response) {
    Anime.create(request.body).then(function(anime) {
        response.status(201).send(anime)
    })
})

app.put('/animes/:id', function(request, response) {
    Anime.findByPk(request.params.id).then(function(anime) {
        if(anime) {
            anime.update(request.body).then(function(anime){
                response.status(201).send(anime)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Anime not found')
        }
    })
})

app.delete('/animes/:id', function(request, response) {
    Anime.findByPk(request.params.id).then(function(anime) {
        if(anime) {
            anime.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Anime not found')
        }
    })
})


app.listen(8080)