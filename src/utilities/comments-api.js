import sendRequest from "./send-request";

export async function add(commentData, id) {
    return sendRequest(`/api/posts/${id}/comments`, 'POST', commentData);
}

export async function deleteComment(id) {
    return sendRequest(`/api/comments/${id}`, 'DELETE');
}
