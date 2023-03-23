import React, { useState } from "react";
import "./CheckoutPage.scss";
const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }
    console.log("Submitted!");
    // Here you can add code to submit the data to your backend or perform any other necessary action
  };

  const validateForm = () => {
    let errors = [];
    if (!name.trim()) {
      errors.push("Name is required");
    }
    if (!email.trim()) {
      errors.push("Email is required");
    } else if (!isValidEmail(email)) {
      errors.push("Invalid email");
    }
    if (!address.trim()) {
      errors.push("Address is required");
    }
    if (!city.trim()) {
      errors.push("City is required");
    }
    if (!state.trim()) {
      errors.push("State is required");
    }
    if (!zip.trim()) {
      errors.push("ZIP Code is required");
    } else if (!isValidZip(zip)) {
      errors.push("Invalid ZIP Code");
    }
    if (!cardNumber.trim()) {
      errors.push("Card number is required");
    } else if (!isValidCardNumber(cardNumber)) {
      errors.push("Invalid card number");
    }
    if (!expDate.trim()) {
      errors.push("Expiration date is required");
    } else if (!isValidExpDate(expDate)) {
      errors.push("Invalid expiration date");
    }
    if (!cvv.trim()) {
      errors.push("CVV is required");
    } else if (!isValidCvv(cvv)) {
      errors.push("Invalid CVV");
    }
    if (!cardholderName.trim()) {
      errors.push("Cardholder name is required");
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const isValidZip = (zip) => {
    const re = /^\d{5}(?:[-\s]\d{4})?$/;
    return re.test(zip);
  };

  const isValidCardNumber = (cardNumber) => {
    const re = /^\d{16}$/;
    return re.test(cardNumber);
  };

  const isValidExpDate = (expDate) => {
    const re = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return re.test(expDate);
  };

  const isValidCvv = (cvv) => {
    const re = /^\d{3}$/;
    return re.test(cvv);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "zip":
        setZip(value);
        break;
      case "cardNumber":
        setCardNumber(value);
        break;
      case "expDate":
        setExpDate(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      case "cardholderName":
        setCardholderName(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        {formErrors.length > 0 && (
          <div className="form-errors">
            {formErrors.map((error) => (
              <div key={error}>{error}</div>
            ))}
          </div>
        )}
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            value={state}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="zip">ZIP Code:</label>
          <input
            type="text"
            name="zip"
            value={zip}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="cardNumber">Card number:</label>
          <input
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="expDate">Expiration date:</label>
          <input
            type="text"
            name="expDate"
            placeholder="MM/YY"
            value={expDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            name="cvv"
            value={cvv}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="cardholderName">Cardholder name:</label>
          <input
            type="text"
            name="cardholderName"
            value={cardholderName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Place order</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
