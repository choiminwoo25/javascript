import { useState } from "react";

export default function Practice() {
    const[count, setCount] = useState(0);

    const increaseOne = () => {
        setCount(count => count+1);
    };

    const increaseThree = () => {
      setCount(count => count+3);
    };
    const changeTen = () => {
      setCount(count => count=10);
    }
    
    return(
        <div>
            <h1>Count: {count}</h1>
        <button onClick={increaseOne}>+1증가</button><br/>
        <button onClick={increaseThree}>+3증가</button><br/>
        <button onClick={changeTen}>10으로 변경</button>
        </div>
        
    )
}