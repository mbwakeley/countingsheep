//Instructions: Consider an array representing sheep in a field where some sheep may be missing from their place. 
//Count and return the number of sheep present in the field (true means present)

function countSheep(array1){
  let numOfSheep = 0;
    for(let i=0; i <= array1.length; i++){
      if(array1[i] === true){
      numOfSheep +=1
      }
    }
    return numOfSheep
}
countSheep(array1)
