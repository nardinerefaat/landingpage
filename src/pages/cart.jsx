import NavbarCart from '../components/navbarCart'
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import styles from '../styles/features.module.scss'
 
const Cart = () => {
    const {cart, handleQuantity} = useContext(DataContext);
    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

   
   return (
    <div id='featuredProducts' 
      className={`${styles.feature} 
      ${styles.myCart}
      
      `}
      style={{marginTop:"50px"}}>
      <NavbarCart/>
        {cart.length > 0 &&
        <>
        <h2>Total Price: <em>{totalPrice.toFixed(2)} $</em></h2> 
        <h3>Your Cart <em>;)</em></h3>
        
        </>
        }
      <div className={styles.container}>
      {cart.map((item) => (
        <div 
          key={item.id} 
           className={`${styles.item}        
              `
              
            }  
          >
          <img src={item.image} width="100" alt={item.title}/>
          <h3>{item.title}</h3>
          <button onClick={()=>handleQuantity(item.id , "plus")}>+</button>
          <button onClick={()=>handleQuantity(item.id , "minus")}>-</button>
          <button onClick={()=>handleQuantity(item.id , "delete")}>delete item</button>
          <p>{item.price} × {item.quantity}</p>
          <p>Total: {item.price * item.quantity} $</p>
        </div>
      ))}
      
      </div>
        {cart.length === 0 &&
            <h3>Your Cart Is <em>Empty !!</em></h3>
        }
    
   
    </div>
  )
}

export default Cart

