// Imports: Express
import express from 'express';
const APP = express();

// Imports: GraphQL
import SERVER from './graphql/schema.js';

// Imports: Mongoose


// Imports: Middleware
import cors from 'cors';


// Database: Connection


// Middleware: CORS
APP.use(cors());


// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP
});


// Use: Static Files


// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});


// Exports
export default APP;