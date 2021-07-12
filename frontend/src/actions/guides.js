import axiosInstance from "axios";
export const getGuides = async () => {
  try {
    const response = await axiosInstance.get(
      "/guides/pdf/"
    );
    return response;
  } catch (error) {
    return error.response && error.response.data.detail
      ? error.response.data.detail
      : error.message;
  }
};


export const getGuide = async(id)=>{
  try {
    const response = await axiosInstance.get(
      `/guides/pdf/${id}/`
    );
    return response;
  } catch (error) {
    return error.response && error.response.data.detail
      ? error.response.data.detail
      : error.message;
  }
}
