import axios from "axios";
import { apiUrl } from "../../Api/apiUrls";
import { SAVE_SUPPLIER_DATA,GET_SUPPLIER_DATA,UPDATE_SUPPLIER_DATA} from "../type";
import { GET_CITY_LIST,GET_STATE_LIST,GET_COUNTRY_LIST} from "../type";
import { toast } from "react-toastify";


const COUNTRY_URL = "https://apis-technical-test.conqt.com/Api/countrystatecity/"
const SUPPLIER_API_URl = "https://apis-technical-test.conqt.com/Api/Item-Supplier/"


export const saveSupplierData = (payload,setItem,setSupplierDetails) => async(dispatch) => {
   try {
     await axios.post(SUPPLIER_API_URl + apiUrl.save_supplier_details,payload).then((res) => {
        if(res.status == 200){
            dispatch({type : SAVE_SUPPLIER_DATA, payload : res.data})
            dispatch(getSupplierData())
            setItem({});
            setSupplierDetails({});
            toast.success(res.message);
        }else{
             toast.error(res.message)
        }
    })
    
    }catch(err){
         toast.error(err)
    }
}

export const getSupplierData = () => async(dispatch) => {
    try {
      await axios.get(SUPPLIER_API_URl + apiUrl.get_items_supplier).then((res) =>{
        if(res.status == 200){
            dispatch({type : GET_SUPPLIER_DATA, payload : res.data})
        }else{
             toast.error(res.message)
        }
     })
   
     }catch(err){
          toast.error(err)
     }
 }

 export const updateSupplierData = (itemId,supplierId) => async(dispatch) => {
    try {
  await axios.patch(`${SUPPLIER_API_URl}${apiUrl.update_supplier_item}${itemId}${supplierId}`).then((res) => {
        if(res.status ==200){
            dispatch({type : UPDATE_SUPPLIER_DATA, payload : res.data})
        }else{
             toast.error(res.message)
        }
     })
     }catch(err){
          toast.error(err)
     }
 }

export const getCountryData = () => async(dispatch) => {
    try {
     await axios.get(COUNTRY_URL + apiUrl.get_country_list).then((res) => {
        if(res.status == 200){
             toast.error(res.data)
            dispatch({type : GET_COUNTRY_LIST, payload : res.data})
        }else{
             toast.error(res.message)
        }
     })
    }catch(err){
          toast.error(err)
     }
 }

 export const getStateData = (countryId) => async(dispatch) => {
    try {
   await axios.get(`${COUNTRY_URL}${apiUrl.get_state_list}?countryId=${countryId}`).then((res) => {
        if(res.status == 200){
            dispatch({type : GET_STATE_LIST, payload : res.data})
        }else{
             toast.error(res.message)
        }
     })

     }catch(err){
          toast.error(err)
     }
 }

 export const getCityData = (countryId,stateId) => async(dispatch) => {
    try {
      await axios.get(`${COUNTRY_URL}${apiUrl.get_city_list}?countryId=${countryId}&stateId=${stateId}`).then((res) =>{
        if(res.status == 200){
            dispatch({type : GET_CITY_LIST, payload : res.data})
        }else{
             toast.error(res.message)
        }
     })

     }catch(err){
          toast.error(err)
     }
 }