import {GraphQLServer} from "graphql-yoga"
import resolvers from './Graphql/resolvers'

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
})

server.start(()=> console.log('Graphql Server Running'))