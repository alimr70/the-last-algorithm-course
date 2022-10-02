export default function bubble_sort(arr: number[]): void {
  // return myFirstSolution(arr)
  return instrutorSolution(arr)
}

const myFirstSolution = (arr: number[]): void => {
  let arrLength = arr.length

  do {

    for(let i = 0; i < arrLength; i++){
      const current = arr[i]
      const next = arr[i+1]
      if(current > next){
        arr[i] = next
        arr[i+1] = current
      }
    }

    arrLength--
  } while (arrLength > 1);
}

const instrutorSolution = (arr: number[]): void => {
  
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - 1 - i; j++){
      if(arr[j] > arr[j + 1]){
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }

}