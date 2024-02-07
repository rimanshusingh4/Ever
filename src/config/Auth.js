import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65c2315506f6d412f284");

export const account = new Account(client);

export const database  = new Databases(client, "65c23bbeb2f601b75f65")
