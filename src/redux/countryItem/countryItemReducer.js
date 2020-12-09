import { SET_COUNTRY_ITEM, setCountryItem } from './countryItemActions';
import { countryApi } from '../../app/componets/Country/getCountryApi';

const initialState = {
  item: undefined,
};

export const countryItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY_ITEM:
      return {
        ...state,
        item: action.countryItem,
      };
    default:
      return state;
  }
};

export const getCountryItem = id => dispatch => {
  countryApi.getCountryPage(id).then(r => {
    dispatch(setCountryItem(r.data[0]));
  });
};
