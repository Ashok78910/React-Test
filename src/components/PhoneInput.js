import React from 'react'
import Phoneinput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const PhoneInput = ({phone,setSupplierDetails}) => {
   
    const handlePhoneChange = (value,data) => {
        setSupplierDetails((prev) => ({
            ...prev,
            phone : value.replace(`+${data.dialCode}`, "").trim(),
            code : data.dialCode
        }))
    }
    
  return (
    <Phoneinput name = "phone" country = {'in'} value = {phone} onChange = {handlePhoneChange} inputStyle = {{width : '100%'}}></Phoneinput>
  )
}

export default PhoneInput