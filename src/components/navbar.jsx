import { useState  } from "react"
import { Link } from "react-scroll"
import styles from '../styles/nav.module.scss'
import { IoMenu } from "react-icons/io5"
import { SiKingstontechnology } from "react-icons/si";
import { CgDarkMode } from "react-icons/cg";

const Navbar = ({darkMode , handleDarkMode}) => {
  const [open, setOpen] = useState(false)

  // const[darkMode , setDarkMode]= useState(false)

  // const handleDarkMode = ()=>{
  //   setDarkMode(!darkMode)
  // }

  
  return (
    <>
      <nav className={`${styles.navbar} 
      ${darkMode?"darkMode" : ""}
      ${darkMode?styles.darkMode : ""}
      
      `}>
        
        <div className={styles.logo}>
          
          <CgDarkMode 
              className={`${styles.kingLogo} ${styles.darkModeIcon}
              ${darkMode?styles.dark : styles.light} `
            }
              onClick={handleDarkMode}
          />
          
          <SiKingstontechnology className={styles.kingLogo}/>
          <h4>KingTech</h4>
        </div>
        <div className={`${styles.links} ${darkMode?"darkMode":""}`}>
          <Link to="home" smooth duration={500}>Home</Link>
          <Link to="features" smooth duration={500}>Products</Link>
          <Link to="productCategory" smooth duration={500}>Shop By Category</Link>
          <Link to="testimonials" smooth duration={500}>Features</Link>
          <Link to="footer" smooth duration={500}>Contact Us</Link>
        </div>

        <div className={styles.buttons}>
          <button>Buy Products</button>
          {/* <button>Signup</button> */}
        </div>
        

        <IoMenu className={styles.menuIcon} onClick={() => setOpen(!open)} />
      </nav>

      {open && (
        <div className={`${styles.mobileMenu} ${darkMode?"darkMode":""}`}>
          <Link to="home" smooth duration={500} onClick={()=>setOpen(false)}>Home</Link>
          <Link to="features" smooth duration={500} onClick={()=>setOpen(false)}>Products</Link>
          <Link to="productCategory" smooth duration={500} onClick={()=>{setOpen(false)}}>Shop By Category</Link>
          <Link to="testimonials" smooth duration={500} onClick={()=>setOpen(false)}>Features</Link>
          <Link to="footer" smooth duration={500} onClick={()=>setOpen(false)}>Contact Us</Link>
        </div>
      )}
    </>
  )
}

export default Navbar