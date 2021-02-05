import React from "react"
import './Checkout.css';


function Checkout(props) {
    var items = props.cartContent.length
    var total = 0

    for (var i = 0; i < props.cartContent.length; i++) {
        total = total + parseFloat(props.cartContent[i].price)
    }

    //function to check if all needed information is filled in, save the information and to ether trigger error or move to next page
    function deliveryFunction() {
        if (document.getElementById("firstName").value == "" || document.getElementById("lastName").value == "" || document.getElementById("city").value == "" || document.getElementById("address").value == "" || document.getElementById("postalCode").value == "" || document.getElementById("country").value == "" || document.getElementById("email").value == "" || document.getElementById("phoneNumber").value == "") {
            document.getElementById("error").className = "errorShow"
        } else {
            document.getElementById("name").innerHTML=document.getElementById("firstName").value + " " + document.getElementById("lastName").value
            document.getElementById("reAddress").innerHTML=document.getElementById("address").value
            document.getElementById("postalCityCountry").innerHTML= document.getElementById("postalCode").value + ", " + document.getElementById("city").value + ", " + document.getElementById("country").value
            document.getElementById("reEmail").innerHTML=document.getElementById("email").value
            document.getElementById("rePhoneNumber").innerHTML=document.getElementById("phoneNumber").value
            document.getElementById("delivery").className = "deliveryHide"
            document.getElementById("payment").className = "paymentShow"
        }
    }

    //function to check if payment method is chosen and to ether trigger error or move to next page
    function paymentFunction() {
        if(document.getElementById('card').checked) {
            document.getElementById("payment").className = "paymentHide"
            document.getElementById("review").className = "reviewShow"
            document.getElementById("payMethod").innerHTML="Credit or Debit Card"
          }else if(document.getElementById('paypal').checked) {
            document.getElementById("payment").className = "paymentHide"
            document.getElementById("review").className = "reviewShow"
            document.getElementById("payMethod").innerHTML="Paypal"
          } else {
            document.getElementById("error2").className = "errorShow"
          }
    }

    //function to change information
    function changeInfo() {
        document.getElementById("delivery").className = "deliveryShow"
        document.getElementById("review").className = "reviewHide"
    }

    //function to direct back to homepage when checkout is complete
    function reviewFunction() {
        document.getElementById("review").className = "reviewHide"
        document.getElementById("titleInfo").className = "titleInfoHide"
        document.getElementById("message").className = "checkoutMessageShow"
        props.deleteCartAll()
    }

    return(
        <div className="topDivCheckout">
            <div id="message" className="checkoutMessageHide">
                <h1>Thank you for your purchase!</h1>
                <img src="https://media0.giphy.com/media/A1gM5nXW9XSLMj8BO2/giphy.gif?cid=ecf05e476zt3ynt8qjgts4m4ggconwr493eq5tguhelwabez&rid=giphy.gif"/>
            </div>
            <div id="titleInfo" classname="titleInfoShow">
                <h1>Checkout</h1>
                <div classname="items-price">
                    <label className="label-items">{items} items</label>
                    <label className="label-price">{total.toFixed(2)}€</label>
                </div>
            </div>
            <div className="checkout">
                <div id = "delivery" className="deliveryShow">
                    <h2>1. Delivery</h2>
                    <div className="input-line-2">
                        <input className="input" id="firstName" type="text" name="firstName" title="First Name"  placeholder="First Name"></input>
                        <input className="input" id="lastName" type="text" name="lastName" title="Last Name"  placeholder="Last Name"></input>
                    </div>
                    <div className="input-line-1">
                        <input className="input" id="address" type="text" name="address" title="Address"  placeholder="Address"></input>
                    </div>
                    <div className="input-line-2">
                        <input className="input" id="postalCode" name="postalCode" title="Postal Code"  placeholder="Postal Code"></input>
                        <input className="input" id="city" type="text" name="city" title="City"  placeholder="City"></input>
                    </div>
                    <div className="input-line-1">
                        <input className="input" id="country" type="text" name="country" title="Country"  placeholder="Country"></input>
                    </div>
                    <div className="input-line-2">
                        <input className="input" id="email" type="email" name="email" title="Email"  placeholder="Email"></input>
                        <input className="input" id="phoneNumber" type="tel" name="phoneNumber" title="Phone Number"  placeholder="Phone Number"></input>
                    </div>
                    <label id="error" className="errorHide">Please fill in missing Information!</label>
                    <button onClick= {() => deliveryFunction()}>Save and Continue</button>
                </div>
                <div id = "payment" className="paymentHide">
                    <h2>2. Payment</h2>
                    <h3>Select Payment Method</h3>
                    <div className="selectpay">
                        <div>
                            <input className="radio" type="radio" id="card" name="paymentMethod" value="card"></input>
                            <img></img>
                            <label className="card">Credit or Debit Card</label>
                        </div>
                        <div>
                            <input className="radio" type="radio" id="paypal" name="paymentMethod" value="paypal"></input>
                            <img className="paypal" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAgCAMAAADuZ0x6AAAC9FBMVEVMaXEQOIMQN4MAn+AASawROYQROIMAneEQOYQAneEPOIEAo+AQOIQMOYUAneERO4MAneQApNsAm+IPOIMPN4QPN4QQMocPOIMAOJAAneEPN4MAneANN4IAnOEQNYUAneIPOYMAnOEAm+IAoecAneMPOIMMNYQQOIQQOIQPOIMRM4oMPIQQOYMPOIQAneEONoMAn98AnOMPOIQQOIQPNIAQOYQQOYQPOIQAneEQOYQAnuEAnOAAm+QAneEAneIONYQAneAQN4QOOIUPP38POIQNN4EPOIQPOIMMN4QPN4MAnuMMN4UAnuEQOIQAnuIOOIQQOYMPOYQQOIMAnuEAnOEPOIMAneMONoMAneMON4MAneEQN4MAnOEAneIAnuEAneEON4IAneIOOYMAq/sAneIAnuMAnOIONoMAneIAneEPNYMAneEQN4QJL38AnOEAneEPN4QONYIPN4MAdtkQOYQQN4YRNZkPOIQQN4MAnOIAneIAnuEAnOEAlOIAneAAm+EPNYMAneEAnuQAneIAnuIAm+MROoQAnOIAneEMMYIAneAAneEAm+MApOYAneIAneAAnOIAl+cAneEAnOMAneEAm+EAneEMNn0AneIAnd4Am+EAlt4ROIUAnOEPOIQAneEPN4QQOIQONIMROIQROoMQOIUAnOMAm+IAneIAneIAn+UPNYMPNoMON4QAm+IPOYYAnuUONoUAmuIMN4IPN4IAnuEAm+IAmuAAnOAAm+INOIAAoOIAm+EAj+cAnOEAn+MAn+IAKn8QOIUAleMNMIMIQXMAkOQNLoIPNYsLNYgPPH4AnOIAmeIAneIAnOIAm98SN4kRN34Ant4QOYMAnOMAneQRN4YAnuIROIUApPYPNn0QOIIOMYQAneAAnuYAneIUI3APKHMSKHQAs+cQNYIApOoAnOMAjeMAneIAmuMOOYIAneEROYQAneESOYQROoQROYMROYUSOoQAnuEAneISOoUAnuIAnOAAneAAoeASPIYRN4JMpuZwAAAA7HRSTlMA3vwWAf352dn9FgjrNPQMIQUSyHrYCk4Ep4cPUuoY+fbtQgo1qEPL+OgOCNKY+0YgKGXPGtzjfMfwTvw8j3sv24q1ELAmXiEdoTAUSaXeYuS04XBohcQ3zUnLvEX4EeRhhyMcq122cLGllJPCEsVfakxzAo/lHDuAWe7r9wz18ZrKHZdLU/3d2zuMr2w9onjWFdHxqdHTPYIbeS/pnMW/XPN2vlmfPyth4eYQuV9Ibfik4ClB8iQ5cx5VOmokVXzVBqzohD5fYrUrd5mrunRS0J2f1cBE7+W/H6WsvZV8rWQzvDaZV2Wvc5PitWNR3zMAAAXBSURBVHhevZZnVJRHF8f/gAsiEHrvTYogHaWrgBBpCkpRRAV7Q8UuothbEBWNRo0lir2LsUXTe++99zy7S1Xzvl+y987DHnY95IScHH6f7lD2x70z/xkAINU/tm8nMVE5kR7oMT5jc01khmwqnJVtje7ZXr9zd30DVXmSDi2xYegpzkod2qeGozvMNtJP7KZyaYue+chL6CFz25S6FK5EN0R4k7iOykclfd4NRo+wuazUZxK6IbuGxHepfIplgebmBwLl3o1L0CNGuLOsaYW7d4IsrnftRnxbSUwBkBXCskH9MjJTZiq4VtuhR8RzFzXZa6ys1h0SYu+nuxFPYrEPgJQgll0FcUnNizHoEQXsMimjet8QXtSU/t053PUMgJJWjUkVaAEiUiHah8Ap1QH/gC3t5Drky78yg8XLEyEwc9XN1mASP7sDwCssjskEMa+ZvIqJVHtE+s8OsB02zwGZYWFh89OBLEc3R7cwS8g4Lbnp5nbzO+CbB+Q6WEUC6waq2y5TT9i/d+rg4sHOPoBfdun5UiPAaBOJ//AF4EJiaZxo7bhEHCkCPFxiJcE4y+OSl1fLF05YoFYYK6ShkJnn1WxoKH0PFLN4OwhXEyVRC8DPeVU7LwY+ET7Bs2Z8dQHgx+fwN04Tb+tqEBm/q2gRcwblUZKWnL6aouNzJ+TxdwPmgEkx12S+ZcO3qNjEMX4HxMtKJglYxollqt+vpuJn4A4f+18BDDhLYhXvavpsYRqDaI2LbFo573tGDH+xP4iqUbRQ/Qg8toqG276fBr3+BTatSsRPCfeVungmAgU0g3t3AJSLiT65cHWof5Ac43KcFUqvENt82asa3nnXtB4FsbSV6qhoYLSY55uz3lj7lqe4wwrht0t43WvHLpfF3lZAUhuJKWtXJX1US3FOeIc9bunkYWcozEsATCSZNMoBwOY4nvtmjibTxk7G9Baced8f2RthZhYxXYh3+gK//EnBW0Of9ZB3VFWV2OChVSAu8MI8HUAmz5qiF2zLY+DANyj1uQ4fTlhTPAhrYd5qjR2726joA2CQvjjHEiWG3FgfMAPYEdWP6lCJmAYMVfMGUbTMPnygq63eBqzl9gsg8GmSD9wtLtYCwGo165oVROCBNEcn+eON+0PmeQp32nNUuhnzrFGk4CnwrXPDRJ4vkVCz8asTgE09z9YMAqMJtNwGxN+jIhmA5TgWhxw+Nnz4uXOOGdA+GwZZkHmVxDNBBPOsY4u+5IbtQPg1sdf5zpTKysopPjb8+PHtPQMyVpzexs4nYhkAD85N6wJ0weEDFqdCkJ4vj1f7hhoabCBvGph1IkAj0IVGFtRBZjQ16n4DSOJUNwK44kWvkfF8dMHSnkyKMAje48dSHrwjz5rJLwezjRNUbIQufMRna48vmHB+OGptgMlU5F4DUCIRQSnoiq1EBESDcOHre+QVMGfsJZmOPAi2kOPB1D46L/RADlgSCJvBSqLBGmVc1foCiGSH/Rx0ZaHEhERaWOR9KnHDAcEQuKiEt3UmBFXOSuIgumKzR8lMPj+i8W6u9p+Sa3zIppNjjLi3oINFoCRQKLThBqO9cNT2mRCUFbIiGTokKwX3TKlgbgN+fJvNIkcOC/yhC/85MnFHSBwKmeDZavL+T3sqrD7hqVZCh7K5Si0DvWnw7euA9bz1b5PCQNxR0GWAv9YbejiwublZbQeZObYasfr/LugkngXjS6FLBE2VMT056b6GhB+A7bymNCFtpIHByIAi6DPNXJw6O1gsMl/0sf0SyLxIDbcGOKCTxFOnNuZ615lBj311nqRpL47H9YunT1/c6gp8bbpixfjaNZzZfhpS8TDRbkcHLXD0AJw8Fi9enAWZY5zguP7QUmVjpMEXD2F94mRy8uhEV2BlRUXFZysBuFqFh1vtwL8gmtOkeh29zSV+hM86oJe50EH9Br2GXmZzXDOJD6O3mdZhkB8btxD/AX8BPgEOhaYIZDcAAAAASUVORK5CYII="/>
                        </div>
                    </div>
                    <label id="error2" className="errorHide">Please choose a payment option!</label>
                    <button onClick= {() => paymentFunction()}>Continue to order review</button>
                </div>
                <div id="review" className="reviewHide">
                    <h2>3. Order Review</h2>
                    <div className="info">
                        <a className="infotitle">Shipping Address</a>
                        <ul>
                            <a id="name"></a>
                            <a id="reLastName"></a>
                            <a id="reAddress"></a>
                            <a id="postalCityCountry"></a>
                            <a id="reEmail"></a>
                            <a id="rePhoneNumber"></a>
                        </ul>
                        <a className="infotitle">Payment Method: </a>
                        <a id="payMethod"></a>
                    </div>
                    {props.cartContent.map((album, index) => (
                    <div className="review" key={index}>
                        <img src = {album.cover} alt = {album.cover}/>
                        <a>{album.name}</a>
                        <a>{album.artist}</a>            
                        <a className="price">{album.price}</a>
                    </div>
                    ))}
                    <div >
                        <button className="buttons" onClick= {() => changeInfo()}>Change Information</button>
                        <button className="buttons" onClick= {() => reviewFunction()}>Proceed with payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;