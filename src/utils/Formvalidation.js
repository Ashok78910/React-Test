export const validateForm = (setError,item,supplierDetails) => {
    const { name, company, city, state, country, email,phone } = supplierDetails;
    const { itemName,quantity,price,date} = item;

    let hasError = false;
    let newErrors = {}; 
    if (name?.trim() === "") {
      newErrors.name = "Please enter the name";
      hasError = true;
    }
    if (country?.length == 0) {
      newErrors.country = "Please select a country";
      hasError = true;
    }
    if (city?.length == 0) {
      newErrors.city = "Please select a city";
      hasError = true;
    }
    if (company?.trim() === "") {
      newErrors.company = "Please enter the company name";
      hasError = true;
    }
    if (state?.length == 0) {
        newErrors.state = "Please select a state";
        hasError = true;
      }
    if (phone?.length < 12) {
        newErrors.phone = "Please enter a valid number";
        hasError = true;
      }
    if (email?.trim() === "") {
      newErrors.email = "Please enter an email address";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      hasError = true;
    }
    if (itemName.trim() === "") {
        newErrors.itemName = "Please enter Item name";
        hasError = true;
      }
      if (quantity.trim() === "") {
          newErrors.quantity = "Please enter quantity";
          hasError = true;
        }
        if (!price || price.length == 0) {
          newErrors.price = "Please enter Item price";
          hasError = true;
        }
        if ([undefined,null].includes(date)) {
          newErrors.date = "Please select date";
          hasError = true;
        }
    setError(newErrors);
  
    return !hasError;
  };
