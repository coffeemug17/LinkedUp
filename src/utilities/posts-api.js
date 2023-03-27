import sendRequest from "./send-request";
const BASE_URL = '/api/posts';

export async function getAll() {
    const getresponsePostData = await sendRequest(BASE_URL);
    return getresponsePostData;
}

export function add(postData) {
    return sendRequest(BASE_URL, 'POST', postData);
}