import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {

  const [formValidity, setFormValidity] = useState({
    name: true,
    city: true,
    street: true,
    postalCode: true
  })

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();

  const isValid = (value) => value.trim() !== '';
  const isFiveChar = (value) => value.trim().length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const city = cityInputRef.current.value;
    const street = streetInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;

    const nameValid = isValid(name);
    const cityValid = isValid(city);
    const streetValid = isValid(street);
    const postalCodeValid = isFiveChar(postalCode);

    const formIsValid = nameValid && cityValid && streetValid && postalCodeValid;

    setFormValidity({
      name: nameValid,
      city: cityValid,
      street: streetValid,
      postalCode: postalCodeValid
    })

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name:name,
      city:city,
      street:street,
      postalCode:postalCode
    })

    nameInputRef.current.value='';
    cityInputRef.current.value='';
    streetInputRef.current.value='';
    postalCodeInputRef.current.value='';

  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formValidity.name ? '' : classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formValidity.name && <p>Name cannot be empty!</p>}
      </div>
      <div className={`${classes.control} ${formValidity.street ? '' : classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formValidity.street && <p>Street cannot be empty!</p>}
      </div>
      <div className={`${classes.control} ${formValidity.postalCode ? '' : classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formValidity.postalCode && <p>Postal code must be 5 characters long!</p>}
      </div>
      <div className={`${classes.control} ${formValidity.city ? '' : classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formValidity.city && <p>City cannot be empty</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit' className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
