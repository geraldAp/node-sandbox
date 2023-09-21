// Thread pool
const crypto = require("crypto"); //provides crypto graphic functionality
// since it also uses the thread pool from the libUv   we can use some of it's method for this task

// using the password base derivation function



// we started from 1 - 5 1- 4 had almost equal time for completion since this is an asynch approach but 5 was almost twice as 1-4 thus concluding libuv has 4 threads by default


// now increaasing the threadpool size to 5

process.env.UV_THREADPOOL_SIZE = 5; // setting the threadpool size to 5
const MAx_CALLS = 6;
// // asynchronous method

const start = Date.now();

for (let i = 0; i < MAx_CALLS; i++) {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("done", Date.now() - start);
  });
}

// crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
//     console.log('done', Date.now() - start);
// }

// testing to find the time it takes to encrypt the password synchronously

// crypto.pbkdf2Sync(
//   "a", // password
//   "b", // salt
//   100000, // iteration
//   512, // key length
//   "sha512" // algorithm
// );
// console.log("done", Date.now() - start);
// crypto.pbkdf2Sync(
//   "a", // password
//   "b", // salt
//   100000, // iteration
//   512, // key length
//   "sha512", // algorithm

// );
// console.log("done", Date.now() - start);
// crypto.pbkdf2Sync(
//   "a", // password
//   "b", // salt
//   100000, // iteration
//   512, // key length
//   "sha512", // algorithm
// );
// console.log("done", Date.now() - start);
