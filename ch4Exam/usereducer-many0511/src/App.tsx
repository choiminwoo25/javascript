import { useReducer } from "react";
import { counterReducer } from "./reducer/counterReducer";
import { cartReducer } from "./reducer/cartReducer";
import { userReducer } from "./reducer/userReducer";

export default function App() {
  // 카운터 상태 관리, counterReducer() 함수를 사용해 숫자 상태를 관리.
  // 버튼 클릭 시 'INCREMENT' 액션이 발생하며, 숫자가 1씩 증가함.
  const [count, countDispatch] = useReducer(counterReducer, 0);

  // 사용자(user) 상태 관리, userReducer() 함수를 사용해 
  // 사용자 정보를 관리함. 'SET_USER' 액션이 발생하면 
  // user.name 값을 'Alice'로 설정함.
  const [user, userDispatch] = useReducer(userReducer, {});

  // 장바구니(cart) 상태 관리, cartReducer() 함수를 사용해 
  // 장바구니 배열을 관리함. 'ADD_ITEM' 액션이 발생하면 
  // { id: 1, name: 'Item 1' }이 배열에 추가됨.
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  return (
    <div>
      {/* 각 상태를 사용한 UI 구성, {" "} 는 JSX에서 
         공백(space) 문자 하나를 출력하기 위한 React 문법 */}
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>
        증가{" "}
      </button>
      {/* (방법 1) 가능한 방법
      <h2>User: {user.name}
          User: {user.email} <br/>
      </h2>
      */}
      {/* (방법 2) 위의 (방법 1)보다 더 안전한 방법  */}
      <h2>User: {user.name ?? "이름 없음"}<br/>
          User: {user.email ?? "email 없음"}
      </h2>      
      
      <button
        onClick={() =>
          userDispatch({ type: "SET_USER", payload: { name: "Alice", 
                                            email : "test@test.com" } })
        }
      >
        Set User
      </button>

      <h2>Cart Items: {cart.length}</h2>
      {/*
      cart 는 단순 배열이 아니라 아래처럼 
      객체(object)를 원소로 가지는 배열임.
        [
          { id: 1, name: "Item 1" }
        ]
      즉, cart[0]의 값은  { id: 1, name: "Item 1" } 임.
      
      key={cart[i].id} 는 React가 각 요소를 
      구분하기 위한 고유값으로써 
      반복 출력에서는 거의 항상 필요함. 
      map() 함수는 배열의 각 원소를 하나씩 변환하여 
      새로운 배열을 만드는 함수이며, React에서는 
      배열 데이터를 여러 JSX 요소로 출력할 때 
      가장 많이 사용함.
      즉,최종적으로 React가 받는 새로운 배열은 다음과 같음.
        [
          <div>...</div>,
          <div>...</div>,
          <div>...</div>
        ]
      */}
      <h2>
        {cart.map( item => (
          <div key={item.id}>
            Cart의 id: {item.id} <br />
            Cart의 name: {item.name}
            <hr />
          </div>
        ))}
      </h2>

      <button
        onClick={() =>
          cartDispatch({ type: "ADD_ITEM", payload: { id: 1, name: "Item 1" } })
        }
      >
        Add Item
      </button>

      <button
        onClick={() =>
          cartDispatch({ type: "REMOVE_ITEM", payload: { id: 1 } })
        }
      >
        Remove Item
      </button>
    </div>
  );
}
