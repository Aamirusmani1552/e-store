import { Client, Account, Storage, Databases } from "appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_APP_ID!);

const databases = new Databases(client);

export { client, databases };
