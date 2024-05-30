import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const fetchVideos = () => axios.get(`${API_URL}/videos`);
export const fetchVideoById = (id) => axios.get(`${API_URL}/videos/${id}`);
export const fetchComments = (videoId) => axios.get(`${API_URL}/videos/${videoId}/comments`);
export const postComment = (videoId, comment) => axios.post(`${API_URL}/videos/${videoId}/comments`, comment);
export const toggleLike = (videoId, userId) => axios.post(`${API_URL}/videos/${videoId}/like`, { userId });
export const fetchLikes = (videoId) => axios.get(`${API_URL}/videos/${videoId}/likes`);