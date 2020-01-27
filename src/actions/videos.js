import axios from 'axios';

const videoSearch = (e) => ({
    type: 'FETCH_VIDEOS',
    payload: axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${e.keywords}&key=AIzaSyDXLWlXz5NW8PIKVLh7VFpHrjz0Ox7OpqU&pageToken=${e.pageToken}&maxResults=${e.maxResults}&type=video`)
});

export default videoSearch;