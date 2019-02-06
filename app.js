const express = require('express'),
    graphqlHTTP = require('express-graphql'),
    app = express(),
    mongoose = require('mongoose');
import  schema  from './schema';
mongoose.Promise = global.Promise;
mongoose.connect("connectstring");
app.get('/', (req, res) => {
    return res.json({
        msg: 'Welcome to GraphQL World'
    });
});
// Create an express server and a GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log(`Server started on port`);
});
