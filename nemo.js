const name =['LazyInvestor'];
const {performance} = require('perf_hooks');
const everyone = ['LazyInvestor','dory','bruce','marlin','gill', 'nigel', 'squirt', 'darla', 'hank'];
function findName(array) {
  for(let i=0;i<array.length;i++) {
      console.log('running');
    if(array[i]==='LazyInvestor') {
      console.log('Found it!');
      break;
    }
  }
}

findName(everyone);
Big O(n)