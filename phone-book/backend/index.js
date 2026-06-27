const e = require('express')
const express = require('express')
var morgan = require('morgan')
const cors = require('cors')


const app = express()

app.use(express.json())

app.use(cors())

app.use(express.static('dist'))


const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

morgan.token('body', (req) => JSON.stringify(req.body))

const morganLogger = (tokens, request, response) => {
    return [
        tokens.method(request, response),
        tokens.url(request, response),
        tokens.status(request, response),
        tokens.res(request, response, 'content-length'), '-',
        tokens['response-time'](request, response), 'ms',
        tokens.body(request, response)
        
    ].join(' ')
}

app.use(requestLogger)

app.use(morgan('tiny'))

app.use(morgan(morganLogger))

let book = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]





app.get('/api/persons', (request, response) =>{
    response.json(book)

})

app.get('/api/persons/:id', (request, response) =>{
    const userId = request.params.id 

    const getInfo = book.find(b => b.id === userId)

    if(getInfo) {
        response.json(getInfo)
    } else {
        response.status(404).end()
    }

})

app.get('/info', (request, response) =>{
   const date = new Date().toString()

response.send(
  `<p>Phonebook has info for ${book.length} people.</p>
  <p>${date}</p>`

)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id

    book = book.filter(b => b.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const contact = request.body

    if(!contact.name) {
        return response.status(400).json({error: 'name does not exist'})
    } 

    if(!contact.number) {
        return response.status(400).json({error: 'number does not exist'})
    }

    const alreadyExists = book.some(b => b.name === contact.name)



    if(alreadyExists){
        return response.status(400).json({error: 'name must be unique'})

    }

    

    
    const newContact = {
        "id": `${Math.floor(Math.random() * 100)}`,
        "name": contact.name,
        "number": contact.number, 

    }

    book.push(newContact)

    response.status(201).json(newContact)

})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


const PORT = 3001 || process.env.PORT

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})