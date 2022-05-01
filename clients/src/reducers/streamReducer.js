// export default (state = {}, action) => {
//   switch (action.type) {
//     case "FETCH_STREAM":
//       return { ...state, [action.payload.id]: action.payload };
//     case "CREATE_STREAM": {
//       const ans = { ...state, [action.payload.id]: action.payload };
//       console.log(state, action.payload, ans);
//       return ans;
//     }
//     case "EDIT_STREAM":
//       return { ...state, [action.payload.id]: action.payload };
//     case "DELETE_STREAM":
//       (() => {
//         const { [action.payload.id]: ommited, ...rest } = state;
//         return rest;
//       })();
//     case "FETCH_STREAMS":
//       (() => {
//         const allStreams = {};
//         action.payload.forEach((stream) => {
//           allStreams[stream.id] = stream;
//         });
//         console.log({ ...state, ...allStreams });
//         // return { ...state, ...allStreams };
//         return { name: "shubham" };
//       })();
//     default:
//       return state;
//   }
// };

import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
