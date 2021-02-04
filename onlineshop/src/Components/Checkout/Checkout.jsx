import React from "react"
import './Checkout.css';

function Checkout(props) {
    
    var deliveryShow = "deliveryShow"
    var paymentShow = "paymentHide"
    var reviewShow = "reviewHide"

    function deliveryFunction() {
        document.getElementById("delivery").className = "deliveryHide"
        document.getElementById("payment").className = "paymentShow"
    }

    function paymentFunction() {
        document.getElementById("payment").className = "paymentHide"
        document.getElementById("review").className = "reviewShow"
    }

    function reviewFunction() {
        
    }

    /*
    if (document.getElementById("del").value === "") {
            alert("Please fill out missing infromation!")
        } else {
            deliveryShow = "deliveryHide"
            paymentShow = "paymentShow"
        }
    */
    return(
        <div>
            <h1>Checkout</h1>
            <div className="checkout">
                <div id = "delivery" className="deliveryShow">
                    <h2>1. Delivery</h2>
                    <div>
                        <input id="del" type="text" name="firstName" title="First Name"  placeholder="First Name"></input>
                        <input type="text" name="lastName" title="Last Name"  placeholder="Last Name"></input>
                    </div>
                    <input type="text" name="address" title="Address"  placeholder="Address"></input>
                    <div>
                        <input name="postalCode" title="Postal Code"  placeholder="Postal Code"></input>
                        <input type="text" name="city" title="City"  placeholder="City"></input>
                        <input type="text" name="country" title="Country"  placeholder="Country"></input>
                    </div>
                    <div>
                        <input type="email" name="email" title="Email"  placeholder="Email"></input>
                        <input type="tel" name="phoneNumber" title="Phone Number"  placeholder="Phone Number"></input>
                    </div>
                    <button onClick= {() => deliveryFunction()}>Save and Continue</button>
                </div>
                <div id = "payment" className="paymentHide">
                    <h2>2. Payment</h2>
                    <h3>Select Payment Method</h3>
                    <div>
                        <div>
                            <input type="radio" id="mc" name="paymentMethod" value="Mastercard"></input>
                            <img></img>
                            <label>Credit or Debit Cart</label>
                        </div>
                        <div>
                            <input type="radio" id="pp" name="paymentMethod" value="Paypal"></input>
                            <img src="data:image/png;base64,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"/>
                        </div>
                    </div>
                    <button onClick= {() => paymentFunction()}>Continue to order review</button>
                </div>
                <div id="review" className="reviewHide">
                    <h2>3. Order Review</h2>
                    <button onClick= {() => paymentFunction()}>Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;