require('dotenv').config(); // this should be over the port
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: require('./schema/schema'),
    graphiql: process.env.NODE_ENV === 'development' ? true : false,
  })
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
