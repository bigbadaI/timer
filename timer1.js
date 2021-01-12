let args = process.argv;

const timer = function(args) {
  let numArr = args.slice(2);
  let workingArr = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
      workingArr.push(numArr[i]);
    }
  }
  for (const times of workingArr) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (times * 1000));
  }
};
timer(args);