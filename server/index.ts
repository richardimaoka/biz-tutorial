const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

const resolvers = {
  Query: {
    tutorial(parent: object, args: object, context: any, info: object) {
      return {
        title: context.data.title,
        pages: context.data.pages,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: any) => {
    try {
      const dataFileContent = await fs.promises.readFile(
        __dirname.concat("/richard-cypress.json"),
        "utf8"
      );
      const data = JSON.parse(dataFileContent);
      return { data: data };
    } catch (err) {
      console.log("***ERROR OCURRED***");
      console.log(err);
    }
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
