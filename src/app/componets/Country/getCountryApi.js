import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://magic-travel-back.herokuapp.com/',
});

export const countryApi = {
  getCountry(ContinentId, sortByType, sortByOrder) {
    return instance.get(
      `country?${
        ContinentId !== null ? `ContinentId=${ContinentId}` : ''
      }&_sort=${sortByType}&_order=${sortByOrder} `,
    );
  },
  getCountryPage(id) {
    return instance.get(`country?id=${id}`);
  },
};
