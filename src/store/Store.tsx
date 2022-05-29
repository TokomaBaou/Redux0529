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
