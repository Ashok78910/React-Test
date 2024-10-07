import React, { useEffect, useState } from 'react'
import ItemDetails from './ItemDetails'
import Supplier from './Supplier'
import { useDispatch } from 'react-redux'
import { getSupplierData, saveSupplierData } from '../Redux/actions/Supplier'
import { validateForm} from '../utils/Formvalidation'
import Listing from './Listing'
import Header from './Header'

const Inverntory = () => {
  const dispatch = useDispatch()
  const [showItem,setShowItem] = useState(true)
  const [showSup,setShowSup] = useState(true)
  const [supplierDetails,setSupplierDetails]= useState({
        name : "",
        country : [],
        city : [],
        company : "",
        state : [],
        code : "+91",
        phone : "",
        email : ""
      })
  const [item,setItem]= useState({
        itemName : "",
        quantity : "",
        price : "",
        date : null
      })
  const [error,setError] =  useState({})

  useEffect(() => {
   dispatch(getSupplierData())
  },[])


const handleSubmit = (e) => {
    e.preventDefault()
    if(validateForm(setError,item,supplierDetails)){
      const payload = {  
        itemDetails:{
                "itemName":item.itemName,
                "quantity":item.quantity,
                "unitPrice":item.price,
                "currency":"$",
                "submissionDate":item.date 
            },
        supplier:{
                "supplierName":supplierDetails.name,
                "companyName":supplierDetails.company,
                "email":supplierDetails.email,
                "phoneCode":supplierDetails.code,
                "phoneNumber":supplierDetails.phone,
                "countryId":supplierDetails.country.value,
                "stateId":supplierDetails.state.value,
                "cityId":supplierDetails.city.value
          }
               }
            dispatch(saveSupplierData(payload,setItem,setSupplierDetails))

        }
      
        }


  return (
    <>
    <Header/>
    <div>
   <label><input name = "item" checked = {showItem} type='checkbox' onChange={()=>setShowItem(!showItem)}/>Item</label> 
   <label><input name = "supplier" checked = {showSup} type='checkbox' onChange={() => setShowSup(!showSup)}/>Supplier</label>
   </div> 
   <form onSubmit={handleSubmit}>
   {showItem && <ItemDetails setError ={setError} error = {error} item = {item} setItem = {setItem} />}
   {showSup && <Supplier supplierDetails = {supplierDetails} setSupplierDetails = {setSupplierDetails} setError ={setError} error = {error}/>}
    <div>
       <h1>Submitted Data</h1>
        <p>The data submitted by users will be displayed bwlow</p>
        <button type = "submit">Save Changes</button>
    </div>
    </form>
    <div>
     <Listing/>
    </div>
    </>

  )
}

export default Inverntory