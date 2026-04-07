import User from "./components/User";

// export default function App() {
//   //name과 age값을 담은 객체 userObj를 정의함
//   const userObj = {
//     name: "철수",
//     age: 20,
//   };

//   //{userObj} 객체를 userObj 라는 속성으로 
//   //User 컴포넌트에 전달함
//   return <User userObj={userObj} />;
// }

export default function App() {
  const userObj = {
    name: "철수",
    age: 20,
  };
  const clickHandler = () => {
    console.log("clicked");
  };
  return <User userObj={userObj} clickHandler={clickHandler} />;
}