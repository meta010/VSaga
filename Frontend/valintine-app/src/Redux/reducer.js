import * as types from './type'


const initstate = {
  loading: false,
  error: false,
  cart: [],
  products: [],
  allproducts:[],
  token: sessionStorage.getItem("token") || "",
  orders:[],
  blogs:[],
  admin_token:sessionStorage.getItem("admin_token") || "",
};

export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case types.ERROR: {
      return { ...state,error:true,loading:false};
    }
    case types.LOADING: {
      return { ...state,error:false,loading:true};
    }
    case types.GETPRODUCTS: {
      return { ...state,error:false,loading:false,products:payload};
    }
    case types.GETALLPRODUCTS: {
      return { ...state,error:false,loading:false,allproducts:payload};
    }
    case types.LOGIN: {
      return { ...state,error:false,loading:false,token:payload};
    }
    case types.SIGNUP: {
      return { ...state,error:false,loading:false,token:payload};
    }
    case types.LOGOUT: {
      return { ...state,error:false,loading:false,token:""};
    }
    case types.ADDCARTPRODUCTS: {
      return { ...state,error:false,loading:false};
    }
    case types.GETCARTPRODUCTS: {
      return { ...state,error:false,loading:false,cart:payload};
    }
    case types.DELETECARTPRODUCTS: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLECARTQUANTITY: {
      return { ...state,error:false,loading:false};
    }
    case types.ADDRESSUPDATE: {
      return { ...state,error:false,loading:false};
    }
    case types.DELETE_ALLCARTPRODUCTS: {
      return { ...state,error:false,loading:false};
    }
    case types.ADD_ALLCARTPRODUCTS_TO_ORDERS: {
      return { ...state,error:false,loading:false};
    }
    case types.GET_ALL_ORDERS: {
      return { ...state,error:false,loading:false,orders:payload};
    }
    case types.GET_ALL_USERS: {
      return { ...state,error:false,loading:false};
    }
    case types.ADMIN_LOGIN: {
      return { ...state,error:false,loading:false,admin_token:payload};
    }
    case types.ADMIN_REGISTER: {
      return { ...state,error:false,loading:false,admin_token:payload};
    }
    case types.ERASE_ADMIN_TOKEN: {
      return { ...state,error:false,loading:false,admin_token:""};
    }
    case types.HANDLE_ADD_PRODUCT: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_DELETE_PRODUCT: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_EDIT_PRODUCT: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_DELETE_USER: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_UPDATE_ORDERS: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_ADD_SLIDER_IMAGES: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_ADD_TESTIMONIAL_IMAGES: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_DELETE_TESTIMONIALS_IMAGES: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_DELETE_SLIDERS_IMAGES: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_DELETE_BLOGS: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_ADD_BLOGS: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_EDIT_BLOGS: {
      return { ...state,error:false,loading:false};
    }
    case types.HANDLE_GET_BLOGS: {
      return { ...state,error:false,loading:false,blogs:payload};
    }
    default: {
      return { ...state };
    }
  }
};
