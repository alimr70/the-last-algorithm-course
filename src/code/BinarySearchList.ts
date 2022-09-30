interface BinaryList{
  (arg1: number[], arg2: number): boolean
}

export default function bs_list(haystack: number[], needle: number): boolean {
  // return myFirstSolution(haystack, needle)
  return instructorSolustion(haystack, needle)
}

const myFirstSolution: BinaryList = (haystack, needle) => {
  if(haystack.length === 0){
    return false
  }

  let startIndex = 0
  let endIndex = haystack.length
  let midIndex = Math.floor(endIndex / 2)

  if(haystack[midIndex] === needle) {
    return true
  } else if (haystack[midIndex] < needle){
    return bs_list(haystack.slice(midIndex + 1, endIndex), needle)
  } else{
    return bs_list(haystack.slice(startIndex, midIndex), needle)
  }
}

const instructorSolustion: BinaryList = (haystack, needle) => {
  let low = 0
  let high = haystack.length
  
  do{
    let mid = Math.floor(low + (high - low) / 2)
    let value = haystack[mid]

    if(value === needle){
      return true
    } else if (value > needle){
      high = mid
    } else {
      low = mid + 1
    }
  } while (low < high){
    return false
  }
}

const mySecondSolution: BinaryList = (haystack, needle) => {
  return false 
  // to be solved with for loop??
}