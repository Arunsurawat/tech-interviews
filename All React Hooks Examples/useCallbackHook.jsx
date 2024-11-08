import React, { memo, useCallback, useState } from 'react'

export default function useCallbackHook() {
    const [dogCount, setDogCount] = useState(0);
    const [catCount, setCatCount] = useState(0);
    
    const updateCatDb = useCallback(() => {
        console.log(`There are ${catCount}`);
    },[catCount])
  return (
    <div>
      useCallbackHook
      <button onClick={() => setDogCount(dogCount + 1)}>
        Dog ({dogCount})
      </button>
      <button onClick={() => setCatCount(catCount + 1)}>
        Cat ({catCount})
      </button>
      <DisplayNumberOfCatsMemorized updateCatDb={updateCatDb} catCount={catCount}/>
      
    </div>
  );
}

function DisplayCatInfo({updateCatDb,catCount}){
    console.log("DisplayCatInfo render");
    return(
        <div>
            Cat Count {catCount}
            <button onClick={updateCatDb}>Update Cat DB</button>
        </div>
    )
}

const DisplayNumberOfCatsMemorized = memo(DisplayCatInfo);