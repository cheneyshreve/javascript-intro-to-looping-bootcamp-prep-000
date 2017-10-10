
function forLoop(array){
<<<<<<< HEAD
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
    array.push("I am 1 strange loop." )
  } else if (i != 1){
    array.push(`I am ${i} strange loops.`)
  }
  }
  return array
=======
  for (i = 0; i < 24; i++) {
    if (i === 1) {
    array.push("I am " + i + " strange loop." )
  } else if (i != 1){
    array.push(`I am ${i} strange loops.`)
  }
   return array
  }
>>>>>>> b9d21bf12685d2424f575477ced4959e786d9115
}

function whileLoop(n){
  while (n > 0) {
    console.log(--n);
  }
    return "done"
}


function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
  }

 do {
     array.pop()
 } while (array.length > 0 || maybeTrue())
   return array
}
