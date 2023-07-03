import { makeNetworkCall } from "src/network";
import { ADD_CARD_FAIL, ADD_CARD_REQUEST, ADD_CARD_SUCCESS } from "../constants/index";

export const getCardPaymentLink = async ({ dispatch, enqueueSnackbar, Router }) => {
  try {
    dispatch({
      type: ADD_CARD_REQUEST,
    });
    const { data } = await makeNetworkCall({ method: "POST", path: "add-card" });
    console.log(data)

    dispatch({
      type: ADD_CARD_SUCCESS,
      payload: data.data,
    });
    data &&
    enqueueSnackbar(data?.response_message, {
      variant: "success",
    });
  
    setTimeout(() =>  window.open(data?.data?.authorization_url, "_newtab"), 3000);
  
    // Router.push(data?.data?.authorization_url);
  } catch (error) {
    dispatch({
      type: ADD_CARD_FAIL,
    });
    error &&
      enqueueSnackbar(error?.response?.data?.response_message || error.message, {
        variant: "error",
      });
  }
};

// export const addBrand = async ({ dispatch, brand, Router, enqueueSnackbar }) => {
//   try {
//     dispatch({
//       type: ADD_BRAND_REQUEST,
//     });

//     const { data } = await makeNetworkCall({
//       method: "POST",
//       path: "/add-brand",
//       requestBody: brand,
//     });
  
//     dispatch({
//       type: ADD_BRAND_SUCCESS,
//       payload: data.data,
//     });
//     data &&
//       enqueueSnackbar(data?.response_message, {
//         variant: "success",
//       });
//     // Router.reload(window.location.pathname);
//   } catch (error) {
//     dispatch({
//       type: ADD_BRAND_FAIL,
//     });
//     error &&
//       enqueueSnackbar(error?.response?.data?.response_message || error.message, {
//         variant: "error",
//       });
//   }
// };

// export const deleteBrand = async ({ dispatch, brandId, Router, enqueueSnackbar }) => {
//   try {
//     dispatch({
//       type: DELETE_BRAND_REQUEST,
//     });
//     const { data } = await makeNetworkCall({
//       method: "DELETE",
//       path: `/delete-brand/${brandId}`,
//     });
//     dispatch({
//       type: DELETE_BRAND_SUCCESS,
//       payload: data.data._id,
//     });
//     data &&
//       enqueueSnackbar(data?.response_message, {
//         variant: "success",
//       });
//     // Router.reload(window.location.pathname);
//   } catch (error) {
//     dispatch({
//       type: DELETE_BRAND_FAIL,
//     });

//     error &&
//       enqueueSnackbar(error?.response?.data?.response_message || error.message, {
//         variant: "error",
//       });
//   }
// };

// export const updateBrand = async ({ dispatch, brand, brandId, Router, enqueueSnackbar }) => {
//   try {
//     dispatch({
//       type: UPDATE_BRANDS_REQUEST,
//     });

//     const { data } = await makeNetworkCall({
//       method: "PUT",
//       path: `/update-brand/${brandId}`,
//       requestBody: brand,
//     });

//     dispatch({
//       type: UPDATE_BRAND_SUCCESS,
//       payload: data.data,
//     });
//     data &&
//       enqueueSnackbar(data?.response_message, {
//         variant: "success",
//       });
//     // Router.reload(window.location.pathname);
//   } catch (error) {
//     dispatch({
//       type: UPDATE_BRAND_FAIL,
//     });
//     error &&
//       enqueueSnackbar(error?.response?.data?.response_message || error.message, {
//         variant: "error",
//       });
//   }
// };
