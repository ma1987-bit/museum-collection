import * as React from "react"
import Layout from '../components/layout'
import {formlabel,inputtext,submitbtn,formcontainer} from './page.module.css'

 const Contact = () => {
  return (
    
    <Layout pageTitle="CONTACT FORM">
    <div className={formcontainer}>
   <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
   <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  <label className={formlabel}>
    First Name
  </label>
  <input className={inputtext} type="text" name="firstname" id="firstname" />
  <label className={formlabel}>
    Last Name
  </label>
  <input className={inputtext} type="text" name="lastname" id="lastname" />
  <label className={formlabel}>
    Email
  </label>
  <input className={inputtext}  type="email" name="email" id="email" />
  <label className={formlabel}>
    Subject
  </label>
  <input className={inputtext}  type="text" name="subject" id="subject" />
  <label className={formlabel}>
    Message
  </label>
  <textarea className={inputtext}  name="message" id="message" rows="5" />
  <button className={submitbtn} type="submit">Send</button>
</form>
</div>
  </Layout>
  
  )
}
export default Contact;