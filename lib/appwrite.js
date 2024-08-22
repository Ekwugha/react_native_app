import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.elo.aora",
  projectId: "66c727050009a72c1bad",
  databaseId: "66c72878000358547290",
  userCollectionId: "66c728c40007648ea3d4",
  videoCollectionId: "66c72941000454548bd9",
  storageId: "66c72c380031ab0112e6",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
