import { FaMobile, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.mainContainer}>

      <h1 className={styles.title}>Contact Us</h1>

      <div className={styles.container}>

        <div className={styles.items}>

          <a href="tel:+201287593651" className={styles.icon} title="Phone">
            <FaMobile />
          </a>

          <a href="mailto:nardinerefaat2@gmail.com" className={styles.icon} title="Email">
            <SiGmail />
          </a>

          <a href="https://wa.me/201287593651" target="_blank" rel="noreferrer" className={styles.icon} title="WhatsApp">
            <IoLogoWhatsapp />
          </a>

        </div>

        <div className={styles.infoText}>
          <p><b>Email:</b> nardinerefaat2@gmail.com</p>
          <p><b>Phone:</b> +20 128 759 3651</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;