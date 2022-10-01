export default function two_crystal_balls(breaks: boolean[]): number {
  // return myFirstSolution(breaks)
  return instructorSolution(breaks)
}

const myFirstSolution = (breaks: boolean[]): number => {
  const sqrtNumberOfStepsIdx = Math.floor(Math.sqrt(breaks.length))

  for(let i = sqrtNumberOfStepsIdx; i < breaks.length; i += sqrtNumberOfStepsIdx){
    if(breaks[i] === true){
      let theLastSqrtNumberOfStepsIdx = i - sqrtNumberOfStepsIdx
      for(let j = theLastSqrtNumberOfStepsIdx; j < i; j++){
        if(breaks[j] === true){
          return j
        }
      }
    }
  }
  return -1
}

const instructorSolution = (breaks: boolean[]): number => {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length))

  let i = jmpAmount
  for(; i < breaks.length; i += jmpAmount){
    if(breaks[i]){
      break
    }
  }

  i -= jmpAmount

  for(let j = 0; j < jmpAmount && i < breaks.length; j++, i++){
    if(breaks[i]){
      return i
    }
  }

  return -1
}