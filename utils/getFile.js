const util = require('util');
const exec = require('child_process').exec;
let child;
url = 'url to file';

const getFile = (url) => {
  child = exec('wget ' + url,
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
};

module.exports = getFile;

