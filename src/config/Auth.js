import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65c9ab78bb0f3dbd188e");

export const account = new Account(client);

export const database  = new Databases(client, "65c9abf47a8df89faa92")
