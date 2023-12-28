import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import cookieParser from 'cookie-parser';
import { ApolloServer} from 'apollo-server-express';
import { resolvers } from './resolvers';
import { connection } from './utils/mongo';
import cors from 'cors';


dotenv.config();

async function bootstrap(){

  // Build Schema
  const schema = await buildSchema({
    resolvers,
    // authChecker,
  });

  // Init express
  const app = express();
  

  // apply cookie parser as middleware
  app.use(cookieParser());
  
  app.use(cors());
  
  app.use(express.json({ limit: '50mb' }))

  // create apollo server
  const server = new ApolloServer({
    schema,
    context: (ctx) => console.log(ctx),
    introspection:true,
  });

  // start apollo server
  await server.start();

  // apply Express as middleware to apollo server
  server.applyMiddleware({app});

  // start express server on set port 
  app.listen(5000, () => console.log(`server is up on port ${process.env.PORT}`));

  // generate connection on the base of Uri 
  connection();

}

// Bootstrap to server
bootstrap();