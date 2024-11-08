import React, { useMemo, useState } from "react";

function isPasswordComplex(password) {
  console.log("Long Calculation...");
  for (let i = 0; i < 10000000; i++) {
    return true;
  }
  return false;
}
export default function MyMemoApp() {
  const [count, setCount] = useState(0);
  const [password, setPassword] = useState("123");
//   const isComplex = isPasswordComplex(password);
  // whenever count state change the compponent is re render and isPasswordComplex function excute even after the password not get changed 
  
  //we can fix this issue with the useMemo hook
  const isComplex = useMemo(()=>isPasswordComplex(password),[password])
  return (
    <div>
      MyMemoApp
      <button onClick={()=> setCount(count + 1)}>{count}</button>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      {isComplex}
    </div>
  );
}
