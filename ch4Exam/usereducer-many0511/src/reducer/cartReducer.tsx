// reducer/cartReducer.ts
interface CartItem {
  id: number;
  name: string;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "CLEAR_CART" };

export const cartReducer = (
  state: CartItem[],
  action: CartAction
): CartItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};
//filter() 는 조건을 만족하는 원소만 남겨서 
// 새로운 배열 생성하는 함수. 
// 즉, 조건이 true인 것만 남기고 false인 것은 제거됨.
//(예) 
// const numbers = [1, 2, 3, 4];
// const result =
//   numbers.filter(num => num > 2);
//(실행 결과) [3, 4]

// id가 같은 상품을 제외하여 장바구니에서 제거하는 
// 역할을 수행.
//!=   값 다름 비교, !==   값 또는 타입 다름 비교

