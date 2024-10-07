import React, { useEffect,useState} from 'react'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'

const Listing = () => {
const [tableData,setTableData] = useState([])    
const data =  useSelector((state) => state.supplierData);


useEffect(()=>{
   if(data){
    setTableData(data)
   }
},[data])


const columns = [
    {
        name : "Supplier",
        selector : row => row.supplier
    },
    {
        name : "Item Name",
        selector : row => row.item_name
    },
    {
        name : "Quantity",
        selector : row => row.quantity
    },
    {
        name : "Country",
        selector : row => row.country
    },
    {
        name : "Email",
        selector : row => row.email
    },
    {
        name : "Phone",
        selector : row => row.phone
    }

]

  return (

  <DataTable title = {"Uplaoded Data"} 
     columns={columns}
     data = {tableData}
     pagination
     selectableRows   
    /> 
  )
}

export default Listing