
//action types 
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";


//Action creater called from component as props
export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });


export function increment(){
    return{
      type: "Increment"
    };
  }
  export function decrement(){
    return{
      type: "Decrement"
    };
  }