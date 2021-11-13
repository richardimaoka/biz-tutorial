const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

const resolvers = {
  Query: {
    tutorial(parent: object, args: object, context: any, info: object) {
      return context.tutorial;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: any) => {
    try {
      const tutorialFileContent = await fs.promises.readFile(
        __dirname.concat("/data/tutorial.json"),
        "utf8"
      );
      const tutorial = JSON.parse(tutorialFileContent);
      return { tutorial: tutorial };
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
