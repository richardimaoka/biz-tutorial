const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/qwiklabs.gql"), "utf8")}
`;

const resolvers = {
  Query: {
    page(parent: any, args: any, context: any, info: any) {
      if (args.id === 11988) {
        return context.data_11988;
      } else {
        null;
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  mockEntireSchema: false,
  context: async ({ req }: any) => {
    const data = fs.readFileSync(
      __dirname.concat("/qwiklabs-11988.json"),
      "utf8"
    );
    return { data_11988: JSON.parse(data) };
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
