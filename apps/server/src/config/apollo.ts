import express from 'express';
import cors from 'cors';
import depthLimit from 'graphql-depth-limit';
import compression from 'compression';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { GraphQLSchema } from 'graphql';
import { graphqlUploadExpress } from 'graphql-upload';
import { context } from './context';
import { db } from './db';

const port = process.env.PORT || 4000;

export const bootstrap = async (schema: GraphQLSchema) => {
  // Create an Express app and HTTP server; we will attach both the WebSocket
  // server and the ApolloServer to this HTTP server.
  const app = express();
  const httpServer = createServer(app);

  app.use(cors());
  app.use(compression());
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

  // Set up ApolloServer.
  const server = new ApolloServer({
    introspection: true,
    context,
    schema,
    plugins: [
      responseCachePlugin(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
    validationRules: [depthLimit(7)],
    formatError: (error: any) => {
      // Remove the internal database error message
      return error;
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: '/gql', cors: { origin: '*' } });

  // Now that our HTTP server is fully set up, we can listen to it.
  httpServer.listen(port, async () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
    const { connection } = await db();
    // connect to database
    console.log(`👋 Connected to database successfully: ${connection.name}`);
  });
};
