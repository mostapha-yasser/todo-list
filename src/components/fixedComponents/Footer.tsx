import { Copyright, Mail, MessageCircleMore, Pickaxe } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-green-50 text-green-950  pt-10 pb-5">

            <div className="  flex flex-col gap-3 items-center md:flex-row  md:justify-evenly  text-sm md:text-base">
                <p className="flex gap-1 items-center">
                    <Pickaxe  className="text-green-600 scale-75 md:scale-100"/>
                    <span className="text-green-900">create by:</span>
                 mostapha yasser 
                </p>
                <p className="flex gap-1 items-center">
                    <Mail className="text-green-600 scale-75 md:scale-100" />
                                        <span className="text-green-900">  Email : </span>

                <a href="mailto:mostaphayasser18@gmail.com" >mostaphayasser18</a>  
                </p>
                            <p className="flex gap-1 items-center">
    <MessageCircleMore className="text-white bg-green-600  p-.5 rounded-xl scale-90 md:scale-100" /><a href="https://wa.me/201027035927" target="_blank" className="te">Chat on WhatsApp</a></p>
                
            </div>
            <div className="flex  items-center justify-center pt-8 text-xs md:text-sm ">

                <Copyright className="scale-50 md:scale-100"/> <span> {new Date().getFullYear()} MOSTAPHA TODO-LIST.All rights reserved.</span> 
            </div>
            <div/>
        
        </footer>
)}

export default Footer;