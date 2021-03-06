import axios from "./axios";

export async function getBegFriends() {
    const { data } = await axios.get("/beg-friends/");

    return {
        type: "GET_ALL_FRIENDS",
        data,
    };
}

export async function acceptFriend(id) {
    const { data } = await axios.post("/accept-friend/" + id);

    return {
        type: "ACCEPT_FRIEND",
        data: data.sender_id,
    };
}

export async function unfriend(id) {
    const { data } = await axios.post("/unfriend/" + id);
    return {
        type: "UNFRIEND",
        data: data.sender_id,
    };
}

export async function firstMessages(data) {
    return {
        type: "FIRST_MESSAGES",
        data,
    };
}

export async function newMessage(data) {
    return {
        type: "NEW_CHAT_MESSAGE",
        data,
    };
}

export async function userJoined(data) {
    return {
        type: "USER_JOINED",
        data,
    };
}

export async function userLeft(data) {
    return {
        type: "USER_LEFT",
        data,
    };
}

export async function getBoardPosts(user) {
    console.log("getting board posts");
    const data = await axios.get(`/board/${user}`);
    console.log("board data:, ", data);
    return {
        type: "BOARD_POSTS",
        data,
    };
}

export async function addPost(post, id) {
    console.log("post: ", post);
    const data = await axios.post(`/board/${id}`, { post });
    return {
        type: "NEW_POST",
        data,
    };
}
