import sendRequest from "./send-request";
const BASE_URL = '/api/jobs';

export async function getSearch(searchData) {
    const searchresult = await sendRequest(`${BASE_URL}/search?searchItem=${searchData}`);
    return searchresult
}

export async function saveJob(jobId) {
    return sendRequest(`${BASE_URL}/${jobId}`, 'POST');
}
