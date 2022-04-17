// abcxyz
// output - cbazyx

function runProgram(input) {
    input = input.trim();
    var str = "";
    var h = Math.floor(input.length/2);
  
    // console.log(input.length)
    if(input.length%2==0){
      for(var i=h-1;i>=0;i--){
         str+=input[i];
      }
      for(var i=input.length-1;i>=h;i--){
          str+=input[i];
       }
       console.log(str);
    }else{
      for(var i=h-1;i>=0;i--){
        str+=input[i];
     }
     str+=input[h]
     for(var i=input.length-1;i>h;i--){
         str+=input[i];
      }
      console.log(str);
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  