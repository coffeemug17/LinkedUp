import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getAll() {
    return sendRequest(BASE_URL);
}

export function add(postData) {
    return sendRequest(BASE_URL, 'POST', postData);
}

export function getUser() {
    return sendRequest(BASE_URL)
}