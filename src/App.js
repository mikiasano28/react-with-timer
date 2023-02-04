import React, { useState, useEffect } from 'react';


const App = () => {
  const [time, setTime] = useState(0);

  // コンポーネントが生成されたときに一回だけ呼びたいときは、useEffectのcallback関数内で呼びたい処理を記述する。その際は第２引数に空の配列をつけるのを忘れないこと


  // useEffect(() => {
  //   console.log("useEffect is called");
  //   window.setInterval(() => {
  //     setTime(prev => ++prev);
  //   }, 1000);
  // }, []);   


  //　空の配列を渡すことに良lってExampleコンポーネントが呼ばれた時のみsetInterval関数が実行される
  // 空の配列　-> 依存してる関数がない


  // useEffect(() => {
  //   console.log("updated!");
  // }, [time]);


  // 依存配列に含めたstateを更新すると、このcallback関数が再度実行される

  // window.setInterval(() => {
  //   // setTime(prev => ++prev);
  // }, 1000);

  return (
    <h1>
      <time>{time}</time>
      <span> seconds</span>
    </h1>
  );

}


export default App;

