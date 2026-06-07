// export default function App() {
//   const onChange = (e) =>{e.console.log("입력값 바뀜")}
//   const onInput = () =>{}
//   return(

import ActionButton from "./components/ActionButton";
import Profile from "./components/Profile";
import Title from "./components/Title";

    
//     <>
//     <form onSubmit={(e)=> {e.preventDefault();}}
//       onChange={onChange} onInput={onInput}>
//     <p>아이디:<input type="text" name="id" /></p>
//     <p>비밀번호:<input type="password" name="pw" /></p>
//     <button type="submit">전송</button>
//     <button type="reset"> 초기화</button>

//     </form>
//     </>
//   )
// }

// export default function App() {
//   const clickHandle = (msg : string) => {alert(msg)}
//   return(
//     <>
//     <button onClick={() => clickHandle( "안녕")}>클릭</button>
//     </>
//   )
// }

// export default function App() {
//   const clickHandle = (
//     e : React.MouseEvent<HTMLButtonElement, MouseEvent> ,
//     msg : string,
//   ) => {
//     console.log(e);
//     alert(msg);
//   }
//   return(
//     <>
//     <button onClick={(e) => clickHandle(e, "hello")}>클릭</button>
//     </>
//   )
// }

export default function App() {
  return(
    <>
    <Title/>
    <Profile name={"홍길동"} grade={2}/>
    <ActionButton onClick={() => alert("학생 정보가 확인되었습니다.")} text={"확인"} />
    </>
  )
}