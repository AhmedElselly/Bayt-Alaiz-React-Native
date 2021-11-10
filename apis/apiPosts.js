import axios from 'react-native-axios';
import qs from 'qs'
// const url = 'https://diab-shop-api.herokuapp.com/api/posts';
const url = 'http://192.168.1.3:8000/api/posts';
const orderUrl = 'https://diab-shop-api.herokuapp.com/api/orders';
const categoriesUrl = 'https://diab-shop-api.herokuapp.com/api/categories';
// const localhost = 'http://156.196.166.27:8000/api/posts';
// const url = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => {
  const res = await axios.get(`${url}`);

  return res;
}

export const postOrder = async (firstName, lastName, email, address, phone, products) => {
  const res = await axios.post(`${orderUrl}/create`, {
    firstName,
    lastName,
    email,
    phone,
    address,
    products
  });

  return res;
}

export const getCategories = async () => {
  const res = await axios.get(`${categoriesUrl}`);
  return res;
}

export const getPostsByCategory = async categoryId => {
  const res = await axios.get(`${url}/by-category/${categoryId}`);
  return res;
}

export const findPosts = async search => {
  console.log('serach', search)
  // const res = await axios.post(`${url}/find`, {search});
  const res = await axios.get(`${url}/find`, {
    params: {
      search
    },
    paramsSerializer: params => {
      return qs.stringify(params)
    }
  });
  return res;
} 