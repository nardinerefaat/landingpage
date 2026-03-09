import  {useState} from 'react'
import styles from '../styles/features.module.scss'

const Features = ({products ,mobileData , audioData,tabletData,storageData , darkMode , handleDarkMode}) => {
 

  const[desc , setDesc] = useState(null)

  const itemDescription=(id)=>{
    setDesc(desc === id ? null : id)
  }
 
  const handleViewAllClick=()=>{
    setShowAll(!showAll)

  }

  const[showAll , setShowAll] = useState(false)
  

  const fullList = [
    ...products,
    ...mobileData,
    ...audioData,
    ...tabletData,
    ...storageData
  ]

  const allProducts = showAll ? fullList : fullList.slice(0, 5)
    


  return (
    <div id='featuredProducts' 
      className={`${styles.feature} 
      ${darkMode?"darkMode" : ""}`}
      
      >
      <div className={styles.head}>
        <h1>Featured Products</h1>
        <button onClick={handleViewAllClick}>
          {showAll ? "Show Less" : "See All Products"}
        </button>
      </div>
      <div className={styles.container}>
        
        {allProducts.map((item , index)=>(
          <div 
              key={item.id} 
              className={`${styles.item} 
              ${!showAll}
              ${darkMode?styles.darkMode:styles.item}
              `
              
            }       
          >
            <img src={item.images[0]} alt={item.title} />
            <h4>{item.title}</h4>
            <p>Brand: {item.brand}</p>
            <span>{item.price}$<br/></span>
            <button className={`${desc === item.id ? styles.active : ""}`} onClick={()=>itemDescription(item.id)}>Description</button>
            {
              desc=== item.id &&(
                <p className={styles.description}>{item.description}</p>
              )}
              
          </div> 

        ))

        }
        </div>
    </div>
  )
}

export default Features
