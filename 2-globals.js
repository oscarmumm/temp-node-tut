// GLOBALS - NO WINDOW !!!!

// __dirname    - path to the current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where program is beign executed

console.log(__dirname);
setInterval(() => {
    console.log("Hello world");
}, 1000);