import { useState } from "react"

export default function App() {
  const [user,setUser] =useState({
    name:"",
    age:0
  });
  const [input,setInput] =useState({
    name:"",
    age:0
  });

  const changeName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      name:e.target.value,
    });
  };

  const changeAge = (e:React.ChangeEvent<HTMLInputElement>) => {
      setInput({
        ...input,
        age:Number(e.target.value),
      });
    };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name:input.name,
      age: input.age,
    });
  };  

  const handleReset = () => {
    setInput({
      name: "",
      age : 0,
    });
  };

  
  return(
    <>
    <form onSubmit={handleSubmit}>
      <h1>회원 정보 입력</h1>
      <input type="text" placeholder="이름 입력" value={input.name} onChange={changeName} /><br/>
      <input type="number" placeholder="나이 입력" value={input.age} onChange={changeAge}  /><br/>
      <button type="submit">가입</button>
      <button onClick={handleReset}>Reset</button>
    </form>
      <h2>출력 결과</h2>
      <p>이름 :{user.name}</p>
      <p>나이 :{user.age}</p>
      
    </>
  )
}