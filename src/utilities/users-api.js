
import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function getUserSearch(searchData) {
    return sendRequest(`${BASE_URL}/search?searchUser=${searchData}`);
}

export async function followUser(userId) {
    return sendRequest(`${BASE_URL}/${userId}`, 'POST');
}

export async function getFollowingUsers() {
    return sendRequest(BASE_URL);
}