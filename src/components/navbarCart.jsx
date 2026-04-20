import { useState  } from "react"
import styles from '../styles/nav.module.scss'
import { IoMenu } from "react-icons/io5"
import { SiKingstontechnology } from "react-icons/si";
import { CgDarkMode } from "react-icons/cg";
import { Link as RouterLink } from "react-router-dom"

import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const NavbarCart = () => {
   const {handleDarkMode } = useContext(DataContext);
  const [open, setOpen] = useState(false)



  
  return (
    <>
      <nav className={styles.navbar}>
        
        <div className={styles.logo}>
          
          <CgDarkMode 
              className={`${styles.kingLogo} ${styles.darkModeIcon}`
            }
              onClick={handleDarkMode}
          />
          
          <SiKingstontechnology className={styles.kingLogo}/>
          <h4>KingTech</h4>
        </div>
        <div className={styles.links}>
          <RouterLink to="/">Back Home</RouterLink>
        </div>

        <div className={styles.buttons}>
          <button>Buy Products</button>
        </div>
        

        <IoMenu className={styles.menuIcon} onClick={() => setOpen(!open)} />
      </nav>

      {open && (
        <div className={styles.mobileMenu}>
          <RouterLink to="/" style={{textDecoration:"none"}} onClick={()=>{setOpen(false);}}>Back Home</RouterLink>
         
        </div>
      )}
    </>
  )
}

export default NavbarCart