// Imports: Dependencies
import express from 'express';
import SERVER from './graphql/schema.js';
import cors from 'cors';
import opn from 'opn';

// Express App
const APP = express();

// Middleware: CORS
APP.use(cors());

// Middleware: GraphQL
SERVER.applyMiddleware({
  app: APP
});

// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});

// Open URL
opn('http://localhost:4000/graphql');

// Exports
export default APP;
