
let count= 0;
export default function(state=count, action){
  switch (action.type) {
    case "Increment": count:count++;
      break;
    case "Decrement": count:count--;
      break;
  }
  return count;
}