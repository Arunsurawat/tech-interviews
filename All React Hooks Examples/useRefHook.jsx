import React, { useEffect, useRef } from "react";

export default function MyRefApp() {
  const countRef = useRef(0);
  const inputRef = useRef();
  
  const handleOnClick = () => {
    countRef.current = countRef.current += 1;
    console.log(countRef.current);
  };
  
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  return (
    <div>
      MyRefApp The count is : {countRef.current}
      <button onClick={handleOnClick}>Count</button>
      <input ref={inputRef}></input>
    </div>
  );
}
