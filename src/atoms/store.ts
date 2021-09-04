import {selector} from 'recoil';
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

  // export const categoryAtom = atom<[]>({
  //   key: 'categoryAtomState', // unique ID (with respect to other atoms/selectors)
  //   default: currentUserNameQuery, // default value (aka initial value)
  // });