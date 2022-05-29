export const Store = () => {
  return;
};

//storeを作る
const createStore = (reducer) => {
  let state = 0;

  const dispatch = (action) => {
    /**新しいstateが返っている */
    const newState = reducer(state, action);
    state = newState;
  };

  /**返却値 */
  return {
    getState: () => state,
    dispatch
  };
};

//reducerを作る
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return state + 1;
    }
  }
};

//初期化
const store = createStore(reducer);
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
console.log(store.getState()); //-> 2
