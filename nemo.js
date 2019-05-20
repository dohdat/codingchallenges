//What is good code?
/*
readable
scalable
How can we measure the performance of this code?
*/

const nemo =['nemo'];

function findNemo(array) {
  for(let i=0;i<array.length;i++) {
    if(array[i]==='nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo(nemo);