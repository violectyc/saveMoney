import axios from '../common/http';

export const addRecord = record => axios.post('/add', record);

export const getRecordList = () => axios.post('/getRecordList');

export const deleteOneById = id => axios.post('/deleteOneById', id);
export const editOneById = record => axios.post('/editOneById', record);

export const registerUser = user=>axios.post('/users/register',user);
export const loginUser = user=>axios.post('/users/login',user);
