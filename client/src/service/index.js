import axios from '../common/http';

export const addRecord = record => axios.post('/add', record);

export const getRecordList = (parm) => axios.post('/getRecordList',parm);

export const deleteOneById = id => axios.post('/deleteOneById', id);
export const editOneById = record => axios.post('/editOneById', record);

export const registerUser = user => axios.post('/users/register', user);
export const loginUser = user => axios.post('/users/login', user);


export const getChart = parm => axios.get('/home/chart', {params: parm});
