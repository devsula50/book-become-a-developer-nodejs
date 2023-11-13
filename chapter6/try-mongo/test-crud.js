const client = require("./util/db");

async function main() {
  try {
    await client.connect();

    console.log("Mongo DB 접속 성공");

    const collection = client.db("b_bad_nodejs").collection("person");

    await collection.insertOne({ name: "Andy", age: 30 });
    const documents = await collection.find({ name: "Andy" }).toArray();

    await collection.updateOne({ name: "Andy" }, { $set: { age: 31 } });
    const updatedDocuments = await collection.find({ name: "Andy" }).toArray();

    await client.close();
  } catch (err) {
    console.error(err);
  }
}

main();
