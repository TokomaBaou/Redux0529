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
  /**処理をcaseで分ける */
  switch (action.type) {
    /**増加させる場合 */
    case "increment": {
      /**stateの変更処理 */
      return state + 1;
    }
  }
};

//初期化
const store = createStore(reducer);
/**storeをdispatchする */
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
/**console.logで値を出す */
console.log(store.getState()); //-> 2

/** subscribの実装
 * subscribeするときに
 * listenerをstoreの中にある
 * listenersに追加していって
 * 後でdispatchした時に
 * そのlistenerを呼び出す
 */
