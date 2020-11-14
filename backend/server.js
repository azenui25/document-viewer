const express = require('express');
const dotenv = require('dotenv');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./graphql/schema')

const {connectDB} = require('./db');
const app = express();
dotenv.config();

// const {createJwtToken} = require('./util/auth')

connectDB();

const {authenticate} = require('./middleware/auth')
app.use(authenticate)


app.get('/', (req, res) => {
    res.json( {msg: "Hello Nicholas/graphql"})
})

app.use('/graphql',graphqlHTTP({
    schema: schema, 
    graphiql: true
}) )

app.listen(process.env.PORT , () => {
    console.log(`App running on PORT ${process.env.PORT}`)
} )