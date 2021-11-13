const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

const resolvers = {
  Query: {
    tutorial(parent: object, args: object, context: any, info: object) {
      console.log(context);
      return { ...context.tutorial, currentPage: context.pages[0] };
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

      const page1FileContent = await fs.promises.readFile(
        __dirname.concat("/data/page1.json"),
        "utf8"
      );
      const page1 = JSON.parse(page1FileContent);

      return { tutorial: tutorial, pages: [page1] };
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
