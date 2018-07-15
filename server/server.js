// Imports: Express
import express from 'express';
const APP = express();

// Imports: GraphQL
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import SCHEMA from './graphql/schema.js';

// // Imports: Mongoose


// Imports: Middleware
import bodyParser from 'body-parser';
import cors from 'cors';


// // Database: Connection


// Middleware: CORS
APP.use(cors());

// Middleware: GraphQL Endpoint
APP.use(
  `/graphql`,
  bodyParser.json(),
  graphqlExpress({ schema: SCHEMA })
);

// Middleware: Graphiql Visualizer
APP.use(
  `/graphiql`,
  graphiqlExpress({ endpointURL: `/graphql` })
);


// Use: Static Files



// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`)
  console.log(`http://localhost:${PORT}/graphql`)
});


// Exports
export default APP;