import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error("putDb not implemented");
export const putDb = async (content) => {
  try {
    console.log("PUT to the database");
    const jateDb = await openDB("jate", 1);
    const tx = jateDb.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    const request = store.put({ content }); // UPDATE HERE
    const result = await request;
    console.log("🚀 - data saved to the database", result);
  } catch (error) {
    console.error("putDb not implemented");
  }
};

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error("getDb not implemented");
export const getDb = async () => {
  try {
    console.log("GET all from the database");
    const jateDb = await openDB("jate", 1);
    const tx = jateDb.transaction("jate", "readonly");
    const store = tx.objectStore("jate");
    const request = store.getAll();
    const result = await request;
    console.log("result.value", result);
    const str = "";
    const content = function () {
      result.forEach((element) => {
        str += element;
      });
    };
    console.log("string", str);
    return str;
  } catch {
    console.error("getDb not implemented");
  }
};

// // Get one db by id
// export const getOneDb = async (id) => {
//   console.log("GET from the database");
//   const jateDb = await openDB("jate", 1);
//   const tx = jateDb.transaction("jate", "readwrite");
//   const store = tx.objectStore("jate");
//   const request = store.get(id);
//   const result = await request;
//   console.log("result.value", result);
//   return result;
// };

// // create a new db
// export const postDb = async (content) => {
//   console.log("Post to the ase");
//   const jateDb = await openDB("jate", 1);
//   const tx = jateDb.transaction("jate", "readwrite");
//   const store = tx.objectStore("jate");
//   const request = store.add({ todo: content }); // UPDATE HERE
//   const result = await request;
//   console.log("🚀 - data saved to the database", result);
// };

// // delete one db by id
// export const deleteDb = async (id) => {
//   console.log("DELETE from the database", id);
//   const jateDb = await openDB("jate", 1);
//   const tx = jateDb.transaction("jate", "readwrite");
//   const store = tx.objectStore("jate");
//   const request = store.delete(id);
//   const result = await request;
//   console.log("result.value", result);
//   return result;
// };

initdb();
