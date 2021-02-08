import SimpleStorage from "../contracts/SimpleStorage.json";

const options = {
  contracts: [SimpleStorage],
  events: {
    SimpleStorage: ["DataChanged"],
  },
};

export default options;
