import User from "./components/User";

/*
<User  name=“철수“ age={20} />는 
User 컴포넌트를 
화면에 렌더링하면서 name 이라는 
속성의 값으로 “철수＂, age 속성의 값으로 20을
함께 전달함. 이때 문자열은 따옴표(“ 또는 ‘)로, 
숫자나 표현식은 중괄호( { } )로 감싸서 전달함. 
*/
export default function App() {
  return <User name="철수" age={20} />;
}