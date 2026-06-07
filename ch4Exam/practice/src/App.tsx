import { useState } from "react"
import "./App.css"

export default function App() {
  const[user,setUser] = useState<{name:string; age: number | null}>({
    name: "",
    age:0
  });

  const[input,setInput] = useState<{name:string; age: number | null}>({
    name:"",
    age:0
  });
  const submit = () => {
    setUser({...input})
  }
  const reset = () => {
    setUser({...user,
      name : "",
      age : null
     });
     setInput({...input,
      name : "",
      age : null
     });
  }
  
  return(
    <div>
      <form action="">
        <h1>회원 정보 입력</h1>
        <input type="text" placeholder="이름 입력" value={input.name}
        onChange={e => setInput({...input, name : e.target.value})}/><br/>
        <input type="number" placeholder="나이 입력" value={input.age ?? ""}
        onChange={e => setInput({...input , age : Number(e.target.value)})} /><br />
        <button type="button" onClick={submit}>가입</button>
        <button type="button" onClick={reset}>Reset</button>
      </form>
      <h2>출력 결과</h2>
      <p>이름 : {user.name}</p>
      <p>나이 : {user.age}</p>
    </div>
  )
}