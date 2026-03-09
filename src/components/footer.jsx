import { FaMobile } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import styles from '../styles/footer.module.scss'
const Footer = ({darkMode}) => {
  return (
     <div
        className={`
          ${styles.mainContainer}
          ${darkMode?"darkMode" : ""}`} 
        >

      <h1>Contact Us</h1>
    <div 
      className={`${styles.container}
      
      
      `}
      
      >
        <div className={styles.items}>
            <a href="tel:+201288956421"  className={styles.phone}><FaMobile /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nardinerefaat2@gmail.com" rel="noreferrer" className={styles.gmail} target='_blank' style={{color:"red"}}><SiGmail/></a>
            <a href="https://wa.me/1234567890" target='_blank' style={{color:"green"}} rel="noreferrer" className={styles.whatsapp}><IoLogoWhatsapp/></a>
        </div>
    </div>
    </div>
  )
}

export default Footer
