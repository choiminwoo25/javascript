import User from "./components/User";

// export default function App() {
//   const userObj={
//     name : "철수",
//     age : 20
//   };
//   const clickHandler = () =>{
//     console.log("clicked");
//   };

//   return<User  {...userObj} clickHandler={clickHandler}/>;
    

// }

// children 속성 연습 관련 App()함수
export default function App() {
  return (
    <>
      <User title="User Component">
        <p>james</p>
        <p>20</p>
        <p>male</p>
      </User>
    </>
  );
}
