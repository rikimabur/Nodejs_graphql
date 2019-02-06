var { makeExecutableSchema } = require('graphql-tools');
import { resolvers } from './resolvers';
var typeDefs = `
type RikiItems{
    id: String
    text: String
    timeISO: String
    title: String
    deleted: Boolean
}
type Email{
    email: String!
}
type User{
    id:ID
    firstName: String!
    lastName: String!
    email: String
    age: Int!
    gender: Gender,
    items:[RikiItems]
}
input RikiItemInput{
    id: String
    text: String
    timeISO: String
    title: String
    deleted: Boolean
}
input UserInput{
    id:ID
    firstName: String!
    lastName: String!
    email: String
    age: Int!
    gender: Gender
    items: [RikiItemInput]
}
enum Gender{
    MALE
    FEMALE
    OTHER
}
type Post{
    id:ID
    title: String
    text: String
}
input PostInput{
    title: String
    text: String
}
type Mutation{
    createUser(input: UserInput) :User
    updateUser(input: UserInput) :User
    deleteUser(id: ID!) :User
    createItem(input: RikiItemInput) :RikiItems
    createPost(input:PostInput):Post
}

  type Query {
    hello: String,
    item:RikiItems
    getUser(id:ID): User
    getUsers:[User]
    getItem(id:ID!):RikiItems
    users:[User]
    getPosts:[Post]
  }
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;

