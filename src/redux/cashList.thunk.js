import { authSlice } from "./auth.slice";

const { addGoodToCashList, removeGoodFromCashList } = authSlice.actions;

const cashListAddGood =
  ({ id, name, image, price, number, selectSize }) =>
  (dispatch, getState) => {
    dispatch(addGoodToCashList({ id, name, image, price, number, selectSize }));
  };

const cashListRemoveGood = (index) => (dispatch, getState) => {
  const state = getState();
  const cashList = state.auth.cashList;

  const newCashList = cashList.filter((item, i) => {
    if (i !== index) return item;
  });
  dispatch(removeGoodFromCashList(newCashList));
};
export { cashListAddGood, cashListRemoveGood };
