import React, {useState} from "react"
import {validateEmail} from "../utils"

const ContactForm = () => {
    const [formData, setFormData] =  useState({firstName: '', lastName: '', email: ''})
    const [formSubmitted, setFormSubmitted] = useState(false)
    
    const handleInput = (e) => {
        const {value, name} = e.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name] : value 
            }
        })
    }

    const pageStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.firstName || !formData.lastName || !validateEmail(formData.email)) {
            window.alert('There was a problem with your submission')
        }
        else {
            setFormSubmitted(true)
        }
    }

    return(
        <div style={pageStyles}>
            <div>
                <h1>Contact</h1>
                {formSubmitted ? <p>Thank you for your signing up for whatever it is you're signing up for.</p> : <form name="contactForm" onSubmit={handleSubmit}>
                    <input type="text" name="firstName" placeHolder="First Name" value={formData.firstName} onChange={handleInput}></input>
                    <input type="text" name="lastName" placeHolder="Last Name" value={formData.lastName} onChange={handleInput}></input>
                    <input type="text" name="email" placeHolder="Email" value={formData.email} onChange={handleInput}></input>
                    <input type="submit" value="submit"/>
                </form>}
            </div>
        </div>
    )
}

export default ContactForm