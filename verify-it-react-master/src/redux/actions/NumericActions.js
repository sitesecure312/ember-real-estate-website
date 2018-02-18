/**
 * Created by baebae on 4/5/16.
 */
// update numeric type
export const UPDATE_NUMERIC_TYPE = 'UPDATE_NUMERIC_TYPE';
const updateNumericType$ = value => ({
  type : UPDATE_NUMERIC_TYPE,
  value
});
export const updateNumericType = value => (dispatch) => {
  dispatch(updateNumericType$(value));
};

// update numeric value
export const UPDATE_NUMERIC_VALUE = 'UPDATE_NUMERIC_VALUE';
const updateNumericValue$ = value => ({
  type : UPDATE_NUMERIC_VALUE,
  value
});
export const updateNumericValue = value => (dispatch) => {
  dispatch(updateNumericValue$(value));
};


// update currency type
export const UPDATE_CURRENCY_TYPE = 'UPDATE_CURRENCY_TYPE';
const updateCurrencyType$ = value => ({
  type : UPDATE_CURRENCY_TYPE,
  value
});
export const updateCurrencyType = value => (dispatch) => {
  dispatch(updateCurrencyType$(value));
};
