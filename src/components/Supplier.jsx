import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCityData, getCountryData, getStateData, getSupplierData } from '../Redux/actions/Supplier'
import Select from 'react-select'
import PhoneInput from "../components/PhoneInput"

const Supplier = ({supplierDetails,setSupplierDetails,error,setError}) => {
  const dispatch = useDispatch()
  const countryData = useSelector((state) => state.country_list) 
  const cityData = useSelector((state) => state.city_list) 
  const stateData = useSelector((state) => state.state_list)
  const [country,setCountry] = useState();
  const [state,setState] = useState([]);
  const [city,setCity] = useState([]);
 
  useEffect(() => {
    dispatch(getCountryData())
  },[])

  useEffect(()=>{
    if(countryData?.data){
      const countrylableValue = countryData?.data?.countyList?.map((data) => ({label :data.name ,value : data.countryId}))
     setCountry(countrylableValue)
    }

  },[countryData])

  useEffect(() => {
    if(stateData?.data){
        const statelableValue = stateData?.data?.stateList?.map((data) => ({label :data.name ,value : data.stateId}))
       setState(statelableValue)
      }
  },[stateData?.data])

  useEffect(() => {
    if(cityData?.data){
        const citylableValue = cityData?.data?.cityList?.map((data) => ({label :data.name ,value : data.cityId}))
       setCity(citylableValue)
      }
  },[cityData?.data])


  useEffect(()=>{
   if(supplierDetails?.country?.value){
    dispatch(getStateData(supplierDetails.country.value))
   }
  },[supplierDetails.country.value])

  useEffect(()=>{
    if(supplierDetails?.state?.value){
     dispatch(getCityData(supplierDetails.country.value,supplierDetails.state.value))
    }
   },[supplierDetails.state.value])



   const handleChange = (e,name) => {
    if (name) {
      setSupplierDetails((prev) => ({
        ...prev,
        [name]: e, 
      }));
    } else {
      setSupplierDetails((prev) => ({
        ...prev,
        [e.target.name]: e.target.value, 
      }));
    }
    setError((prevError) => ({
      ...prevError,
      [e?.target?.name || name]: "", 
    }));
  };

  return (
    <>
        <h1>Supplier details</h1>
        <div>
        <label>Supplier Name</label>
        <input type="text" name = "name" placeholder='Supplier name' value = {supplierDetails.name} onChange={handleChange}></input>
        {error.name && <span style={{color:"red"}}>{error.name}</span>}
        </div>
        <div>
        <label>Company Name</label>
        <input type="text" name = "company" placeholder='Company name' value = {supplierDetails.company} onChange={handleChange}></input>
        {error.company && <span style={{color:"red"}} >{error.company}</span>}
        </div>
        <div>
        <label>Country</label>
        <Select style={{width : "200px"}} placeholder = 'Select country' name='country' value={supplierDetails.country} onChange={(e) => handleChange(e,"country")} options = {country}/>
        {error.country && <span style={{color:"red"}}>{error.country}</span>}
        </div>
        <div>
        <label>State</label>
        <Select style={{width : "200px"}} placeholder = 'Select state' name = "state" value={supplierDetails.state} options = {state} onChange={(e) => handleChange(e,"state")}/>
        {error.state && <span style={{color:"red"}}>{error.state}</span>}
        </div>
        <div>
        <label>City</label>
         <Select style={{width : "200px"}} placeholder = 'Select city' name = "city" value={supplierDetails.city} options = {city} onChange={(e) => handleChange(e,"city")}/>
         {error.city && <span style={{color:"red"}}>{error.city}</span>}
        </div>
        <div>
        <label>Phone</label>
        <PhoneInput phone = {supplierDetails.phone} setSupplierDetails = {setSupplierDetails}/>
        {error.phone && <span style={{color:"red"}}>{error.phone}</span>}
        </div>
        <div>
        <label>Email</label>
        <input type="text" name='email' placeholder='Email Address'  onChange={handleChange} value = {supplierDetails.email}></input>
        {error.email && <span style={{color:"red"}}>{error.email}</span>}
        </div>
    </>
  )
}

export default Supplier