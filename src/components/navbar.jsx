import { useState  } from "react"
import { Link } from "react-scroll"
import styles from '../styles/nav.module.scss'
import { IoMenu } from "react-icons/io5"
import { SiKingstontechnology } from "react-icons/si";
import { CgDarkMode } from "react-icons/cg";
import { Link as RouterLink } from "react-router-dom"
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Navbar = () => {
  const {handleDarkMode } = useContext(DataContext);
  const [open, setOpen] = useState(false)

  
  return (
    <>
      <nav className={`${styles.navbar} `}>
        
        <div className={styles.logo}>
          
          <CgDarkMode 
              className={`${styles.kingLogo} ${styles.darkModeIcon}
            `
            }
              onClick={handleDarkMode}
          />
          
          <SiKingstontechnology className={styles.kingLogo}/>
          <h4>KingTech</h4>
        </div>
        <div className={`${styles.links} `}>
          <Link to="home" smooth duration={500}>Home</Link>
          <Link to="features" smooth duration={500}>Products</Link>
          <Link to="productCategory" smooth duration={500}>Shop By Category</Link>
          <Link to="testimonials" smooth duration={500}>Features</Link>
          <RouterLink to="/cart">Cart</RouterLink>
        </div>

        <IoMenu className={styles.menuIcon} onClick={() => setOpen(!open)} />
      </nav>

      {open && (
        <div className={`${styles.mobileMenu} `}>
          <Link to="home" smooth duration={500} onClick={()=>{setOpen(false);}}>Home</Link>
          <Link to="features" smooth duration={500} onClick={()=>setOpen(false)}>Products</Link>
          <Link to="productCategory" smooth duration={500} onClick={()=>{setOpen(false)}}>Shop By Category</Link>
          <Link to="testimonials" smooth duration={500} onClick={()=>setOpen(false)}>Features</Link>
          <Link to="footer" smooth duration={500} onClick={()=>setOpen(false)}>Contact Us</Link>
          <RouterLink to="/cart" onClick={()=>setOpen(false)}>Cart</RouterLink>
        </div>
      )}
    </>
  )
}

export default Navbar