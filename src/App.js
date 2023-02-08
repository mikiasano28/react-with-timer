import React, { useState, useEffect } from 'react';


const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp(prev => !prev)}>Toggle</button>
    </>
  );
}

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // console.log("updated");
    let intervalId = null;
    intervalId = window.setInterval(() => {
      console.log("interval called");
      setTime(prev => prev + 1);
    }, 1000);

    return () => {
      // debugger
      // console.log("updated end");   // updatedを初期化するために呼ばれていて、その後またupdatedが呼ばれる
      window.clearInterval(intervalId);
    }
  }, [time])


  return (
    <h2>
      <time>{time}</time>
      <span> seconds</span>
    </h2>
  );

}



export default Example;