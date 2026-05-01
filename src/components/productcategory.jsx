import  {useState} from 'react'

import styles from '../styles/features.module.scss'

import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ProductCategory = () => {
   const {
    products,
    mobileData,
    audioData,
    tabletData,
    storageData,
    addToCart
    
  } = useContext(DataContext);
  
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
  const [productAmount , setProductAmount] = useState({})
  const handleProductAmount = (id,operation)=>{
    setProductAmount(prev=>{
      const current = prev[id]? prev[id] :1
      let newValue = current
      if(operation === "plus"){
        newValue = current +1
  
      }
      else if (operation === "minus") {
      newValue = Math.max(1, current - 1); // prevent going below 1
    }
    return{
      ...prev,[id]:newValue
    }
    
    })
   
  }
 
  const handleCart = (id ,image,title,price,quantity)=>{
    addToCart({
      id,
      image,
      title,
      price,
      quantity: quantity || 1
    })
    // alert(`${title} is added to cart !`)
  }
  return (
    <div className={styles.feature}>
      <div className={styles.head}>
        <h1>Shop By Category</h1>     
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
            className={styles.item}>
            <img src={item.images[0]} alt={item.title}  />
            <h4>{item.title}</h4>
            <p>Brand: {item.brand}</p>
            <span>{item.price}$<br/></span>
            <button className={`${desc === item.id ? styles.active : ""}`} onClick={()=>itemDescription(item.id)}>Description</button>
            {
              desc=== item.id &&(
                <p className={styles.description}>{item.description}</p>
              )}
               <div className={styles.cart}>
                <button onClick={()=>handleCart(item.id,item.images?.[0] , item.title,item.price,productAmount[item.id]||1)}>Add To Cart</button>  
                <div className={styles.add}>
                  <button onClick={()=>handleProductAmount(item.id,"plus")}>+</button>
                  <p className={styles.value}>{productAmount[item.id]||1}</p>
                  <button onClick={()=>handleProductAmount(item.id,"minus")}>-</button>
                </div>

              </div>
          </div>
        ))}

        
      </div>


    </div>
  )
}

export default ProductCategory/*
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