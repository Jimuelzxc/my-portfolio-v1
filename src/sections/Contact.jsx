import { useState } from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import axios from 'axios'

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
const Contact = () => {
    const [contactInput, setContactInput] = useState({
        name: "",
        email: "",
        message: "",
    })
    function handleOnChange(e){
        setContactInput({...contactInput, [e.target.name]: e.target.value})
    }
    function submitContact(){
        axios.post('https://formsubmit.co/ajax/azzoniyujin@gmail.com', {
            name: contactInput.name,
            email: contactInput.email,
            message: contactInput.message
        }).then((response) => {
            alert(response.data.message)
            
        })
    }
    return (
        <div className="min-h-screen bg-[#EDEDED] flex items-center py-20" id="contact">
            <Container className="w-full">
                <h1 className="font-black text-4xl md:text-5xl mb-2">GET IN TOUCH</h1>
                <hr className="mb-10" />
                <div className="flex justify-between gap-12 flex-wrap md:flex-nowrap">
                    <div className="form md:w-[50%]">
                        <div className="flex gap-5 mb-10 flex-wrap">
                            <Input title="Your Name" holder="Enter your name" name="name" onChange={handleOnChange}/>
                            <Input title="Email Address" holder="Enter your email address" name="email" onChange={handleOnChange} />
                        </div>
                        <div className="flex flex-col ">
                            <span className="mb-2">Your Message</span>
                            <textarea name="message" id="" cols="10" rows="10" className="bg-transparent border border-[#B2B0B0] p-5" placeholder="Enter your message" onChange={handleOnChange}></textarea>
                        </div>
                        <button className="bg-[#F01038] w-full h-[50px] font-black text-white tracking-widest my-16" onClick={submitContact}>SEND MESSAGE</button>
                    </div>
                    <div className="contact w-full md:w-[50%]" >
                        <span className="font-light opacity-50">CONTACT DETAILS</span>
                        <div className="flex flex-col gap-2 mt-2">
                            <div className="flex gap-3 items-center opacity-80">
                                <FaEnvelope />
                                <span>jimuelmarcgensaya@gmail.com</span>
                            </div>
                            <div className="flex gap-3 items-center mb-12 opacity-80">
                                <FaPhoneAlt />
                                <span>+612345689554</span>
                            </div>
                            <span className="opacity-50 text-[0.7em] text-center md:text-start">©jimuelgensaya</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;