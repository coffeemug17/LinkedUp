import { getToken } from "./users-service";

export default async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the second argument
    // used to include a data payload, set headers, specify method, etc
    const options = { method };
    if (payload) {
        options.headers = {
            'Content-Type': 'application/json'
        };
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        // Need to have an authorization header
        // use the logical OR assignment operator
        options.headers ||= {};
        options.headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(url, options);
    // If res.ok if false then something went wrong
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}