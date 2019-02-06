import ItemModel from './models/items'
import UserModel from './models/user'
import Post from './sequelize/post';
const users = [];
let user = {};
// Root resolver
export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        item: () => {
            return {
                id: '123',
                text: 'Demo graphql',
                timeISO: '2 pm tuedsy',
                title: 'Riki demo graphql',
                deleted: false,
                age: 20
            }
        },
        getUser: ({ id }) => {
            return users.find(user => user.id === id)
        },
        getUsers: async () => {
            return await users.find().populate('items');
        },
        getItem: async (_, { id }) => {
            return await ItemModel.findOne({ _id: id })
        },
        getPosts: async () => {
            return await Post.findAll();
        },
        users: () => {
            return users;
        }
    },
    Mutation: {
        // createUser: (_, { input }) => {
        //     user = input;
        //     users.push(user);
        //     return user;
        // },
        createUser: async (_, { input }) => {
            return await Promise.resolve(UserModel.create(input));
        },
        createItem: async (_, { input }) => {
            return await Promise.resolve(ItemModel.create(input));
        },
        updateUser: async (_, { input }) => {
            return await UserModel.findOneAndUpdate({ _id: input.id }, input, { new: true });
        },
        deleteUser: async (_, { id }) => {
            return await UserModel.findByIdAndRemove({ _id: id });
        },
        createPost: async (_, { input }) => {
            return await Post.create(input);
        }
    }
};