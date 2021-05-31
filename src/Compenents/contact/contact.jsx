import { useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form"


export default function Contact() {
  const [messages, setMessage] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
  const sendEmail= (e,data) =>{
      
      console.log(watch("example",data));
      e.preventDefault();
      
      
      emailjs.sendForm('my_gmail', 'template_ogunbv6', e.target, 'user_bxqtSbi27jUIihtYWAygi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        
         
  }
const handlechange = ()=>{
  setMessage(true); 
}
console.log(handlechange);
 

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit(sendEmail)}>
          <input type="text" placeholder="saisir votre nom" name="Nom"
                  
                            {...register("username",
                             { required: "Vous devez entrer un nom d'utilisateur",
                              minLength: {
                              value: 3,
                              message: "Vous devez entrer au moins 3 caractére"
                          } 
                              })
                          } />
             <span>{errors.username && errors.username.message}</span>
           
             
         

          <input type="text" placeholder="Votre Email" name="email"
                      {...register("email",
                       { required: "Vous devez entrer un adresse mail",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Veuillez saisir un e-mail valide"
                      }

                       })}
                />
               <span>{errors.email && errors.email.message}</span>
        
          <textarea placeholder="Message" name="message"
                         {...register("texte", 
                         { required: "Vous devez entrer un message",
                            minLength: {
                            value: 1,
                            message: "Vous devez entrer au moins 8 caractére"
                                } 
                                    })
                                } />
                     <span>{errors.texte && errors.texte.message}</span>
               
          
          <button type="Submit">Envoyer</button>
          {messages && <span className="span">Merci, je vous répondrai dès que possible :)</span>}
        </form>
      </div>
    </div>
  );
}
