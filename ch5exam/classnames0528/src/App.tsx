//ex1
// import "./App.css";
// //classnames 패키지에서 classNames 함수를 import
// import classNames from "classnames/bind";
// import Child from "./components/Child";

// export default function App() {

//   //isActive 변수는 true 또는 false 값을 가짐.
//   //값에 따라 <button> 요소에 
//   // is-active 클래스를 추가하거나 제거함
//   const isActive = true; //추가
  
//   //btn 클래스는 항상 적용됨.
//   // isActive가 true일 때만 is-active 클래스가 함께 추가됨.
//   // 이 경우 <button> 요소의 클래스는 btn is-active가 됨.
//   return (
//     <>
//       <button className={classNames( 'btn', {"is-active": isActive} ) }>
//         App Button
//       </button>
//       <Child />
//     </>
//   );
// }


//ex2 css모듈에서 classname 라이브러리 사용
import styles from "./App.module.css";
//classnames/bind 패키지에서 classNames 함수를 import
import classNames from "classnames/bind";
import Child from "./components/Child";



export default function App() {
  const isActive = true;
  //bind() 함수를 사용해 CSS 모듈 객체(styles)와 연결함
  // 이렇게 하면 객체 속성에 직접 접근하지 않고도 
  // cx('클래스명')처럼 간단한 문자열로 스타일을 사용 가능함.
  //const cx = classNames.bind(styles);를 실행하면 
  // 내부적으로 아래와 같은 함수가 만들어 짐.
  //function cx(classInfo) {
  // classNames 로직 실행  }
  //즉, cx(...)처럼 호출 가능함.

  const cx = classNames.bind(styles);

  //btn이 true이므로 btn 클래스는 항상 적용됨.
  // is-active 클래스는 isActive가 true일 때만 함께 추가됨.
  return (
    <>
      <button className={cx({ btn: true, "is-active": isActive })}>
        App Button
      </button>
      <Child />
    </>
  );
}
//cx = className eXpression의 줄임말로 많이 사용됨.

