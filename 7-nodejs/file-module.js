const http = require('http');
const fs = require('fs');

const directoryName = './fileSystem';
const STATUS_CODES = Object.entries(http.STATUS_CODES).join(',\n');
const METHODS = http.METHODS.join(',\n');
console.time('Append file');
// create directory
try {
  if (!fs.existsSync(directoryName)) {
    fs.mkdirSync(directoryName);
  }
} catch (error) {
  console.error(`Error in creating directory: ${error}`);
}

// write file in $directoryName
fs.writeFile(`${directoryName}/write-file.txt`, `${STATUS_CODES}`, (error) => {
  console.log(error);
});

// readdirSync() or readdir()
console.log(`List of file in ${directoryName}`, fs.readdirSync(directoryName));

//Append file
fs.appendFile(`${directoryName}/write-file.txt`, `${METHODS}`, (error) => {
  if (error) {
    console.log(`Appendfile Error: `, error);
    return;
  }
});

// read file
fs.readFile(`${directoryName}/write-file.txt`, (error, data) => {
  //   console.log(data.toString());// works fine
  console.log(`File data: ${data}`); // normaly it converts to string in data buffer
});
console.timeEnd('Append file'); //console.time(), and console.timeEnd() name should be same

// fs.unlinkSync(`${directoryName}/write-file.txt`);
