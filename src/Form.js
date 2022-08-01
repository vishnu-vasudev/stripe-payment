import React from "react";
import { loadStripe } from "@stripe/stripe-js";


const Form = () => {
    const stripe = loadStripe('pk_test_51LQln9SD15ZsgjBIRLO25L5L37E1OvXkFLeMLDcD1aJTCMZYA2g3hzjuBc4TsjMHWFiAPtMDmEsHk5nXDpgOHeJX00z4BxjJHz');
    return (
        <>  
            <center>
                <div className="container" style={{width:"480px"}}>
                    <label for="name">Name</label><br />
                    <input className="form-control" name="name" type="text" /><br />
                    <label for="email">E-mail</label><br />
                    <input className="form-control" name="email" type="text" /><br />
                    <label for="phone">Mobile number</label><br />
                    <input className="form-control" name="phone" type="text" /><br />
                    <label for="amount">Amount</label><br />
                    <input className="form-control" name="amount" type="number" /><br />
                    <button className="btn btn-primary">Pay</button>
                </div>
            </center>
            
        </>
        
    )
}

export default Form