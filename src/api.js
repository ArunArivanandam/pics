import axios from "axios";

const searchImages = async (term) => {
  //asynchronous call to unsplash api with axios get request
  //unsplash api requires body with Authorizarion and params parameters to get images
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID KK5vanl5-ZiTzgS0gWvnyiCB-FnrxuiAUilpPqCLIas",
    },
    params: {
      query: term,
    },
  });
  // returns the list of images
  return response.data.results;
};

export default searchImages;
