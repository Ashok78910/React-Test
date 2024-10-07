import React from 'react'

const ItemDetails = ({item,setItem,error,setError}) => {
    const today =  new Date().toISOString().split("T")[0];

    const handleChange = (e) => { 
        if(e.target.name == "price" || e.target.name == "quantity"){
            const inputValue = e.target.value
            if(/^\d+$/.test(inputValue)){
              setItem((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value, 
                  }));
                
            }
        }else{
            setItem((prev) => ({
                ...prev,
                [e.target.name]: e.target.value, 
              }));
            setError((prevError) => ({
              ...prevError,
              [e?.target?.name]: "", 
            }))
        }
       
    }
    
  return (
    <>
    <h1>item details</h1>
        <div>
        <label>Item Name</label>
        <input type="text" name = "itemName" placeholder='Enter Item name' value = {item.itemName} onChange={handleChange} maxLength={225}></input>
        {error.itemName && <span style={{color:"red"}}>{error.itemName}</span>}
        </div>
        <div>
        <label>Quantity</label>
        <input type="text" name = "quantity" placeholder='Enter quantity' value = {item.quantity} onChange={handleChange} maxLength={10}></input>
        {error.quantity && <span style={{color:"red"}}>{error.quantity}</span>}
        </div>
        <div>
        <label>Unit price</label>
        <span>$</span><input type="text" name = "price" placeholder='Enter price' value = {item.price} onChange={handleChange}></input>
         {error.price && <span style={{color:"red"}}>{error.price}</span>}
        </div>
        <div>
        <label>Item Name</label>
        <input type="date" name = "date" placeholder='Enter Item name' value = {item.date} onChange={handleChange} min={today}></input>
         {error.date && <span style={{color:"red"}}>{error.date}</span>}
        </div>
    </>    
  )
}

export default ItemDetails