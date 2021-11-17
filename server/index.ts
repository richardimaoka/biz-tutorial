const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

const resolvers = {
  Query: {
    tutorial(parent: object, args: any, context: any, info: object) {
      const mappedPage = context.pageMap[args.currentPageId];
      const currentPage = mappedPage ? mappedPage : null;
      return { ...context.tutorial, currentPage };
    },
  },
};

const readJson = async (filename: string): Promise<any> => {
  const fileContent = await fs.promises.readFile(
    __dirname.concat(filename),
    "utf8"
  );
  const jsonData = JSON.parse(fileContent);
  return jsonData;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: any) => {
    try {
      const tutorial = await readJson("/data/tutorial.json");
      const page1 = await readJson("/data/page1.json");
      const page2 = await readJson("/data/page2.json");
      const page3 = await readJson("/data/page3.json");
      const page4 = await readJson("/data/page4.json");
      const page5 = await readJson("/data/page5.json");

      return {
        tutorial: tutorial,
        pageMap: { "1": page1, "2": page2, "3": page3, "4": page4, "5": page5 },
      };
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
