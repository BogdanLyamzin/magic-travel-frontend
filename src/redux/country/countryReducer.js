import { SET_COUNTRY, setCountry } from './countryActions';
import { countryApi } from '../../app/componets/Country/getCountryApi';

const initialState = {
  items: [],
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        items: action.country,
      };
    default:
      return state;
  }
};
export const getCountry = (
  ContinentId,
  sortByType,
  sortByOrder,
) => dispatch => {
  countryApi.getCountry(ContinentId, sortByType, sortByOrder).then(r => {
    dispatch(setCountry(r.data));
  });
};
