//Create a function that reverses a string:
//"Hi my name is The Lazy Investor" should be:
//"rotsevnI yzaL ehT si eman ym iH"

function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'not good';
  }

  const backWards = [];
  const strLength = str.length - 1;
  for (let i = strLength; i >= 0; i--) {
    backWards.push(str[i]);
  }
  console.log(backWards);
  return backWards.join('');
}

reverse('Hi my name is The Lazy Investor')