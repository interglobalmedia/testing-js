const name = "Freddy";
typeof name === "string";

if (!("serviceWorker" in navigator)) {
  // you have an old browser :-(
}

const greeting = "hello";
console.log(`${greeting} world!`);
[(1, 2, 3)].forEach(x => console.log(x));

// npx prettier src/example.js --list-different

// npx prettier src/example.js --write

/* In review, to validate that all the files in the project have been formatted by Prettier, we can use a --list-different flag when we run Prettier. If there are any files that would be different if Prettier were to format them, then it will fail the script. Otherwise, the script will pass. */
