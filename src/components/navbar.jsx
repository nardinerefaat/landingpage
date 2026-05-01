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
  const {handleDarkMode, cartItemsCount } = useContext(DataContext);
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className={`${styles.navbar} `}>      
       <div className={styles.logo}>          
          <CgDarkMode 
            className={`${styles.kingLogo} ${styles.darkModeIcon}`}
            onClick={handleDarkMode}
          />
          
          <SiKingstontechnology className={styles.kingLogo}/>
          <h4>KingTech</h4>
        </div>
        <div className={`${styles.links} `}>
          <Link to="home" smooth duration={500} spy activeClass={styles.active}>Home</Link>
          <Link to="features" smooth duration={500} spy activeClass={styles.active}>Products</Link>
          <Link to="productCategory" smooth duration={500} spy activeClass={styles.active}>Shop By Category</Link>
          <Link to="testimonials" smooth duration={500} spy activeClass={styles.active}>Features</Link>
          <RouterLink to="/cart">Cart {cartItemsCount > 0 && `(${cartItemsCount})`}</RouterLink>
        </div>

        <IoMenu className={styles.menuIcon} onClick={() => setOpen(!open)} />
      </nav>

      
        <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
          <Link to="home" smooth duration={500} onClick={()=>{setOpen(false);}}>Home</Link>
          <Link to="features" smooth duration={500} onClick={()=>setOpen(false)}>Products</Link>
          <Link to="productCategory" smooth duration={500} onClick={()=>{setOpen(false)}}>Shop By Category</Link>
          <Link to="testimonials" smooth duration={500} onClick={()=>setOpen(false)}>Features</Link>
          <Link to="footer" smooth duration={500} onClick={()=>setOpen(false)}>Contact Us</Link>
          <RouterLink to="/cart" onClick={()=>setOpen(false)}>Cart {cartItemsCount > 0 && `(${cartItemsCount})`}</RouterLink>
        </div>
      
    </>
  )
}

export default Navbar