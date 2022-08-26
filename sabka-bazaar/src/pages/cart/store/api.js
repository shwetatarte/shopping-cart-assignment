export const postCartItemToServer = async (options) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/addToCart`,
      options
    );
    return response.data;
  } catch (error) {
    console.log("API ERRRRRR :", error);
  }
};
