const { ApolloServer, gql } = require("apollo-server");
const { v4 } = require("uuid");

let posts = [
  {
    id: "3d594650-3436-11e9-bc57-8b80ba54c431",
    title: "Fullstack Developer",
    company: "Turtle Solutions",
    recruiter: "Matti Meikäläinen",
    description:
      "Etsimme nyt kokenutta Full Stack Node.js -kehittäjää asiakasprojekteihimme. Jos uskot että sinusta on on-site konsultiksi asiakkaidemme haastaviin projekteihin, sinulla on sujuva suomen kielen taito ja useamman vuoden koodauskokemus, haluamme kuulla sinusta nyt.",
    location: "Helsinki",
    published: "15-7-2020",
    deadline: "30-7-2020",
    techs: { required: ["React"], recommended: ["GraphQL"] },
    link: "https://reactjs.org",
    state: "WAITING",
  },
  {
    id: "3d594650-3436-11e9-bc57-8b80ba54c432",
    title: "Frontend Developer",
    company: "Moose Solutions",
    recruiter: "Mikko Meikäläinen",
    description:
      "Etsimme nyt kokenutta Frontend -kehittäjää asiakasprojekteihimme. Jos uskot että sinusta on on-site konsultiksi asiakkaidemme haastaviin projekteihin, sinulla on sujuva suomen kielen taito ja useamman vuoden koodauskokemus, haluamme kuulla sinusta nyt.",
    location: "Helsinki",
    published: "15-7-2020",
    deadline: "30-7-2020",
    techs: { required: ["React"], recommended: ["GraphQL"] },
    link: "https://reactjs.org",
    state: "ACCEPTED",
  },
];

const typeDefs = gql`
  type Techs {
    required: [String]
    recommended: [String]
  }

  enum allowedState {
    WAITING
    ACCEPTED
    HIDDEN
    PINNED
  }

  type Post {
    id: ID!
    title: String!
    company: String!
    recruiter: String!
    description: String!
    location: String!
    published: String!
    deadline: String
    techs: Techs
    link: String!
    state: allowedState!
  }

  input TechInput {
    required: [String]
    recommended: [String]
  }

  type Query {
    postCount: Int!
    allPosts: [Post!]!
  }

  type Mutation {
    addPost(
      title: String!
      company: String!
      recruiter: String!
      description: String!
      location: String!
      published: String!
      deadline: String
      techs: TechInput
      link: String!
    ): Post
  }
`;

const resolvers = {
  Query: {
    postCount: () => posts.length,
    allPosts: () => posts,
  },
  Mutation: {
    addPost: (root, args) => {
      const post = { ...args, id: v4(), state: "WAITING" };
      posts = posts.concat(post);
      return post;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
