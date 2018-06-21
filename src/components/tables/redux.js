// const FETCH_DATA = "FETCH_DATA";
// const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
// const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
// export const initialState = {
//     data: [],
//     loading: false,
//     error: ""
// };

// export const fetchUsersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_DATA:
//             return {
//                 ...state,
//                 loading: true
//             };
//         case FETCH_USERS_SUCCESSED:
//             return {
//                 ...state,
//                 data: action.payload,
//                 loading: false
//             };
//         case FETCH_USERS_FAILED:
//             return { ...state, loading: false, error: "" };

//         default:
//             return state;
//     }
// };

// export const FetchData = (query, sortBy, page) => ({
//     type: FETCH_DATA
// });

// export const FetchDataSuccessed = response => ({
//     type: FETCH_DATA_SUCCESS,
//     users
// });

// export const FetchDataFailed = error => ({
//     type: FETCH_DATA_FAIL,
//     error: error.data.error,
//     errorCode: error.data.errorCode
// });

// export const NextPage = () => ({
//     type: NEXT_PAGE
// });
// export const PreviousPage = () => ({
//     type: PREVIOUS_PAGE
// });
