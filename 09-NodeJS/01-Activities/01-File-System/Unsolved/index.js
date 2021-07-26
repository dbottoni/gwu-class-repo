const fs = require("fs");

fs.appendFile("log.txt", 'dont overwrite my string', function(err){

  if (err) {
  return console.log(err);
  }

  console.log("done!");

});

fs.readFile("log.txt", "utf8", function(error,log){

  if(error){
    return console.log(error);
  }
  console.log(log);


})

