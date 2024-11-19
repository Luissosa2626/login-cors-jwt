import axios from './axios';

export const registerRequest = user => axios.post(`/register`, user)

export const loginRequest = user => axios.post(`/login`, user)

export const getUsersRequest = () => axios.get('/logs')

export const verifyTokenRequest = () => axios.get('/verify')
