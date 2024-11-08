import { useReducer } from "react";


function reducer(count, action){
    switch(action.type){
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count -1;
        default:
            throw new Error(`Unexpeted Action ${action.type}`)
    }
}
function MyApp(){
    const [count , dispatch] = useReducer(reducer ,0)
    return (
      <>
        count is {count}
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Decrement
        </button>
      </>
    );
    
    
}