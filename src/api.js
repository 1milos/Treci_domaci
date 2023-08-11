import axios from "axios";
export async function getRequests() {
    const res = await axios.get('/credit-requests');
    return res.data;
}

export async function getClients() {
    const res = await axios.get('/clients');
    return res.data;
}


export async function getCredits() {
    const res = await axios.get('/credits');
    return res.data;
}

export async function logout() {
    await axios.post('/logout');
    axios.defaults.headers.common.Authorization = ''
}

export async function login(email, password) {
    const res = await axios.post('/login', { email, password });
    axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
    return res.data.user;
}

export async function createRequest(data) {
    const res = await axios.post('/credit-requests', data);
    return res.data;
}