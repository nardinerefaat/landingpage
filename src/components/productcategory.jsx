import  {useState} from 'react'

import styles from '../styles/features.module.scss'

const ProductCategory = ({products ,mobileData , audioData,tabletData,storageData , darkMode , handleDarkMode}) => {
  const [ category,setCategory] = useState("phone")

  const selectedCategory = 
    category === "phone" ?mobileData: 
    category ==="laptop"? products:
    category ==="audioandvisuals"? audioData:
    category ==="storage"? storageData:
    category ==="tablets"? tabletData:[]
    

  const handleCategory = (categoryName)=>{
    setCategory(categoryName)
    
  }

  const[desc , setDesc] = useState(null)
  
  const itemDescription=(id)=>{
      setDesc(desc === id ? null : id)
    }
   
 
  return (
    <div 
      className={`${styles.feature} 
      ${darkMode?"darkMode" : ""}`}
        
    >

      <div className={styles.head}>
        <h1>Shop By Category</h1>
        
        {/* <input
            type="text"
            placeholder="Search products..."
            onChange={(e)=>setSearch(e.target.value)}
        /> */}
      </div>

      
      <div className={styles.btns}>
          <button className={`${styles.categoryBtn}  ${category==="phone"? styles.activeBtn:""}`} onClick={()=>handleCategory("phone")}>Phone</button>
          <button className={`${styles.categoryBtn}  ${category==="laptop"? styles.activeBtn:""}`} onClick={()=>handleCategory("laptop")}>Labtops</button>
          <button className={`${styles.categoryBtn}  ${category==="audioandvisuals"? styles.activeBtn:""}`} onClick={()=>handleCategory("audioandvisuals")}>Audio / Visuals</button>
          <button className={`${styles.categoryBtn}  ${category==="tablets"? styles.activeBtn:""}`} onClick={()=>handleCategory("tablets")}>Tablets</button>
          <button className={`${styles.categoryBtn}  ${category==="storage"? styles.activeBtn:""}`} onClick={()=>handleCategory("storage")}>Storage / Components</button>
      </div>
       

      <div className={styles.container}>
        {selectedCategory.map(item =>(
          <div key={item.id} 
            className={`${styles.item} ${darkMode?styles.darkMode:styles.item}`}>
            <img src={item.images[0]} alt={item.title}  />
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

export default ProductCategory


/*
1- menu has the categories names
2- while selecting name => show its product data
3- add it to the shop all 

I NEED TO
1- access the data ====
2- access the name of data 
(if "selection active" === "product data name":
    data = "product name"
)



*/