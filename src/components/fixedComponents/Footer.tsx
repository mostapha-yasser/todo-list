import { Copyright, Mail, MessageCircleMore, Pickaxe } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-green-50 text-green-950  pt-10 pb-5">

            <div className="  flex flex-col gap-3 items-center md:flex-row  md:justify-evenly ">
                <p className="flex gap-1 items-center">
                    <Pickaxe  className="text-green-600"/>
                    <span className="text-green-900">create by:</span>
                 mostapha yasser 
                </p>
                <p className="flex gap-1 items-center">
                    <Mail className="text-green-600" />
                                        <span className="text-green-900">  Email : </span>

                <a href="mailto:mostaphayasser18@gmail.com" >mostaphayasser18</a>  
                </p>
                            <p className="flex gap-1 items-center">
    <MessageCircleMore size={30} className="text-white bg-green-600  p-1 rounded-xl" /><a href="https://wa.me/201027035927" target="_blank" className="te">Chat on WhatsApp</a></p>
                
            </div>
            <div className="flex  items-center justify-center pt-8">

                <Copyright size={20} /> <span> {new Date().getFullYear()} MOSTAPHA TODO-LIST.All rights reserved.</span> 
            </div>
            <div/>
        
        </footer>
)}

export default Footer;