const fs = require("fs");

fs.writeFile("./message.txt","Im rl2 node", (err) => {
    if(err)throw err ;
    console.log("your file is ready\n");

});

fs.readFile("/etc/passwd","utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});