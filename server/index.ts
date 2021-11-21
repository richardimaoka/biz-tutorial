const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.gql"), "utf8")}
`;

const resolvers = {
  Query: {
    tutorial(parent: object, args: any, context: any, info: object) {
      const mappedPage = context.mapping["wsl"][args.currentPageNum];
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
      const tutorial = await readJson("/data/wsl/tutorial.json");
      const wslPage1 = await readJson("/data/wsl/page1.json");
      const wslPage2 = await readJson("/data/wsl/page2.json");
      const wslPage3 = await readJson("/data/wsl/page3.json");
      const wslPage4 = await readJson("/data/wsl/page4.json");
      const wslPage5 = await readJson("/data/wsl/page5.json");

      return {
        tutorial: tutorial,
        mapping: {
          wsl: {
            "1": wslPage1,
            "2": wslPage2,
            "3": wslPage3,
            "4": wslPage4,
            "5": wslPage5,
          },
        },
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
