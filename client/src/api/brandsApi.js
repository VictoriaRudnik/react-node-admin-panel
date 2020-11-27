import { getHelper } from '../helpers/apiHelper'

const brandsApi = {
  getBrands: () => getHelper('brands'),
  getFilteredBrands: (searchString) => getHelper(`brands/${searchString}`),
};

export { brandsApi };
