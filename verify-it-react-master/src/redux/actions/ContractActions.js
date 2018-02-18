/**
 * Created by baebae on 4/6/16.
 */
import { Api } from 'AppServices';

export const UPDATE_CONTRACT_RESULT = 'UPDATE_CONTRACT_RESULT';
const updateContractResult = contracts => ({
  type : UPDATE_CONTRACT_RESULT,
  contracts
});

export const getContracts = pageNum => (dispatch) => {
  Api.contract.getContracts({ pageNum })
    .then((res) => {
      console.info(`get result: ${pageNum}`, res.body.data);
      dispatch(updateContractResult(res.body.data));
    });
};

