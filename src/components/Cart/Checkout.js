import { useRef,useState } from "react";
import classes from "./Checkout.Module.css";
const Checkout = (props) => {
    const [formsInputValidity,setFormsInputValidity] = useState({
        name:true,
        street:true,
        postalCode:true,
        city:true
    })
  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.trim().length === 5;
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormsInputValidity({
        name:enteredNameIsValid,
        street:enteredStreetIsValid,
        postalCode:enteredPostalCodeIsValid,
        city:enteredCityIsValid
    })
    const isFormValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

      if(!isFormValid){
        return;
      }
      props.onConfirm({
          name:enteredName,
          street:enteredStreet,
          postalCode:enteredPostalCode,
          city:enteredCity
      });
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${!formsInputValidity.name?classes.invalid:''}`}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={nameInputRef} />
        {!formsInputValidity.name&&<p>Please enter a valid name!</p>}
      </div>
      <div className={`${classes.control} ${!formsInputValidity.street?classes.invalid:''}`}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetInputRef} />
        {!formsInputValidity.street&&<p>Please enter a valid street!</p>}
      </div>
      <div className={`${classes.control} ${!formsInputValidity.postalCode?classes.invalid:''}`}>
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" type="text" ref={postalCodeInputRef} />
        {!formsInputValidity.postalCode&&<p>Please enter a valid postal code(5 characters long)!</p>}
      </div>
      <div className={`${classes.control} ${!formsInputValidity.city?classes.invalid:''}`}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityInputRef} />
        {!formsInputValidity.city&&<p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}> Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
