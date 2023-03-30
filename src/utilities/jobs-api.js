import sendRequest from "./send-request";
const BASE_URL = '/api/jobs';

export async function getSearch(searchData) {
    const searchresult = await sendRequest(`${BASE_URL}/search?searchItem=${searchData}`);
    return searchresult
}