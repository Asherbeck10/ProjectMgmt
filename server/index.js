const express = require('express');

const { ruruHTML } = require('ruru/server');

const colors = require('colors');

const connectDB = require('./config/db');

require('dotenv').config();

const { createHandler } = require('graphql-http/lib/use/express');

const schema = require('./schema/schema');

const PORT = process.env.PORT || 8000;

const app = express();

// Connect to database
connectDB();

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// Serve GraphiQL HTML page statically
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql' }));
});
// Create and use the GraphQL handler.

app.use(
  '/graphql',
  createHandler({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);
