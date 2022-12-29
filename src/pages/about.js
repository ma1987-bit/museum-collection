import * as React from "react"
import Layout from '../components/layout'

 const About = () => {
  return (
    
    <Layout pageTitle="About Us">
   <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
  <label>
    Name
    <input type="text" name="name" id="name" />
  </label>
  <label>
    Email
    <input type="email" name="email" id="email" />
  </label>
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  <label>
    Subject
    <input type="text" name="subject" id="subject" />
  </label>
  <label>
    Message
    <textarea name="message" id="message" rows="5" />
  </label>
  <button type="submit">Send</button>
  <input type="reset" value="Clear" />
</form>
  </Layout>
  
  )
}
export default About;