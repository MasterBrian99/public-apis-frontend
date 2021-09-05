import {selector,atom} from 'recoil';
import axios from 'axios';

  export const categoryAtom = selector<[]>({
    key: 'categorySelector',
    get: async () => {
      try {
        const response = axios.get('https://api.publicapis.org/categories');
      return (await response).data;
      } catch (error) {
        console.error(`${error}`);
      return [];
      }
    },
  });




  export const categoryEntity = atom({
    key: 'categoryEntityState', // unique ID (with respect to other atoms/selectors)
    default: 'noValue', // default value (aka initial value)
  });

  export const searchEntity=atom({
    key:'searchEntityState',
    default:'anime'
  })