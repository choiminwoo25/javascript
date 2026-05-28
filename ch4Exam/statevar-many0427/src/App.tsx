//(Ex 1)

//  import { useState } from "react";

//  export default function App() {
//    const [name, setName] = useState(null);
//    const [age, setAge] = useState(null);
//    const [gender, setGender] = useState(null);

//    return <div>App</div>;
//  }

//(Ex. 2)
// 지금 코드에서는 상태(formState)는 정의되어 있지만, 
// JSX에서 해당 값을 렌더링하지 않고 있기 때문에 
// 화면에 아무것도 나오지 않음.
// import { useState } from "react";

//  export default function App() {
//    const [formState, setFormState] = useState({
//      name: "홍길동",
//      age: 23,
//      gender: "Male",
//    });

//    return <div>App</div>;
//  }

//(Ex 3.)
//formState의 각 속성(name, age, gender)을 
// JSX 내부에서 출력하도록 수정된 코드
import { useState } from "react";

export default function App() {
  const [formState, setFormState] = useState({
    name: "홍길동",
    age: 23,
    gender: "Male",
  });

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이름: {formState.name}</p>
      <p>나이: {formState.age}</p>
      <p>성별: {formState.gender}</p>
    </div>
  );
}