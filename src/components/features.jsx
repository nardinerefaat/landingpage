import  {useMemo, useState} from 'react'
import styles from '../styles/features.module.scss'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
const Features = () => {
 const{
  products,
  mobileData,
  audioData,
  tabletData,
  storageData,
  addToCart
 } = useContext(DataContext)
  const[desc , setDesc] = useState(null)

  const itemDescription=(id)=>{
    setDesc(desc === id ? null : id)
  }
 
  const handleViewAllClick=()=>{
    setShowAll(!showAll)

  }

  const[showAll , setShowAll] = useState(false)
  


  const handleCart = (id ,image,title,price,quantity)=>{
    addToCart({
      id,
      image,
      title,
      price,
      quantity: quantity || 1
    })
     alert(`${title} is added to cart!`)
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
  
  const [query, setQuery] = useState("");
  const filteredProducts = useMemo(()=>{
      const fullList = [
    ...products,
    ...mobileData,
    ...audioData,
    ...tabletData,
    ...storageData
  ]

    const q = query.trim().toLowerCase()
    if(!q) return fullList
    return fullList.filter(p=>{
      const title = (p.title || "").toLowerCase()
      const brand  = (p.brand || "").toLowerCase()
      const descText = (p.description || "").toLowerCase()
      return title.includes(q) || brand.includes(q) || descText.includes(q)
    })
  }, [products, mobileData, audioData, tabletData, storageData, query])
  
  const allProducts = showAll ? filteredProducts : filteredProducts.slice(0, 5)
  return (
    <div id='featuredProducts' 
      className={`${styles.feature}`}
      
      >
      <div className={styles.head}>
        <h1>Featured Products</h1>
        <button onClick={handleViewAllClick}>
          {showAll ? "Show Less" : "See All Products"}
        </button>
      </div>
       

      <input
        id='product-search'
        type='text'
        placeholder='Search Products...'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        className={styles.search}
      
      />

      <div className={styles.container}>
        {allProducts.length === 0 && <p className={styles.noResults}>No products found</p>}
        {allProducts.map((item)=>(
          <div 
              key={item.id} 
              className={`${styles.item} 
              ${!showAll}
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
              <div className={styles.cart}>
                <button onClick={()=>handleCart(item.id,item.images?.[0] , item.title,item.price,productAmount[item.id]||1)}>Add To Cart</button>  
                <div className={styles.add}>
                  <button onClick={()=>handleProductAmount(item.id,"plus")}>+</button>
                  <p className={styles.value}>{productAmount[item.id]||1}</p>
                  <button onClick={()=>handleProductAmount(item.id,"minus")}>-</button>
                </div>

              </div>
          </div> 

        ))

        }
        </div>
    </div>
  )
}

export default Features
