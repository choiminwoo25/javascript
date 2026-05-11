// reducer/userReducer.ts

//함수 매개변수의 타입이 너무 길고 복잡해 보인다면, 
// TypeScript의 인터페이스(interface)를 사용해 
// props 객체의 타입을 따로 정의했듯이 
//interface 대신 type 키워드를 사용해도 동일한 효과를 얻을 수 있음.
// type 키워드를 사용해 타입을 정의하는 것을 
// 타입 별칭(type aliasing)이라고 함.

//? 는 TypeScript에서 “이 속성은 있어도 되고 
// 없어도 된다”는 의미의 선택적(Optional) 속성 문법.
// 선택적 속성은 내부적으로 다음과 비슷하게 동작함.
// name?: string;
// ≈ 
// name: string | undefined; 
// 즉, name 속성은 문자열이거나 없을(undefined)수도 있음
interface UserState {
  name?: string;
  email?: string;
}

type UserAction =
  | { type: "SET_USER"; payload: UserState }
  | { type: "CLEAR_USER" };

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    case "CLEAR_USER":
      return {};
    default:
      return state;
  }
};
