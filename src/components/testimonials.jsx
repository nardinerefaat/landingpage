import { CiDeliveryTruck,CiBookmarkCheck  } from "react-icons/ci";
import { GiCardPickup } from "react-icons/gi";
import styles from '../styles/shoppingFeatures.module.scss'

const Testimonials = ({darkMode , handleDarkMode}) => {
  return (
    <div
        className={`
          ${styles.mainContainer}
          ${darkMode?"darkMode" : ""}`} 
        >
    <h1>Features</h1>
    <div 
      className={`${styles.container}`} 
      >
      <h3>Experience Streamlined Shopping With Crescendo</h3>
      <div className={styles.items}>
        <div>
          <CiDeliveryTruck className={styles.icon}/>
          <h4>Free Delivery</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, illo!</p>
        </div>
        <div>
          <GiCardPickup className={styles.icon}/>
          <h4>Self Pickup</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, illo!</p>
        </div>
        <div>
          <CiBookmarkCheck className={styles.icon}/>
          <h4>Warranty</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, illo!</p>
        </div>
      </div>
    </div>
</div>
  )
}

export default Testimonials
