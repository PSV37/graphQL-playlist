const express = require('express');
const graphqlHTTP = require('express-graphql')

const app = express();

//Use Middleware for understand the graphQl
app.use('/graphql', graphqlHTTP({
    
}));

app.listen(4000, ()=>{
    console.log('server running on port 4000')
})