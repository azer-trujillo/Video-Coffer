import axios from "axios";

const videoSearch = e => ({
  type: "FETCH_VIDEOS",
  payload: axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${e.keywords}&key=AIzaSyAk52PX3rY_f6yNW60SIGY7fS5t9hgdHkw&pageToken=${e.pageToken}&maxResults=${e.maxResults}&type=video`
  )
});

export default videoSearch;
