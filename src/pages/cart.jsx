import NavbarCart from "../components/navbarCart";
import { useContext, useMemo } from "react";
import { DataContext } from "../context/DataContext";
import styles from "../styles/features.module.scss";

const Cart = () => {
  const { cart,addToCart, handleQuantity , allProducts  , cartItemsCount ,clearCart , getRecommendations} = useContext(DataContext);
  
  const recommendations = useMemo(()=>{
    if (!cart.length) return []
    return getRecommendations(cart[0], allProducts, cart)
  } , [cart , allProducts])

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => {
      const price = item?.price || 0;
      const qty = item?.quantity || 0;
      return acc + price * qty;
    }, 0);
  }, [cart]);
  
 
  if (cart.length === 0) {
    return (
      <div
        id="featuredProducts"
        className={`${styles.feature}`}
        style={{ marginTop: "50px" , height:"100vh" }}
      >
        <NavbarCart />

 
        <div className={styles.empty}>
          <h3>
            Your Cart is <em>Empty !!</em> 🛒
          </h3>
          <p>
            Looks like you haven’t 
            added anything yet. 
            Explore our products 
            and start building your cart ꨄ
          </p>
        </div>
      </div>
    );
  }

  
  return (
    <div
      id="featuredProducts"
      className={`${styles.feature} `}
      style={{ marginTop: "50px" }}
    >
      <NavbarCart />
      <div>
      {/* Header */}
      <h2>
        Total Price: <em>{totalPrice.toFixed(2)} $</em>
      </h2>
      <h3>
        Your Cart <em>;)

          <h4
        style={{margin:"10px"}}
      >{cartItemsCount} Item</h4>
        </em>
      </h3>
      <button onClick={clearCart}  className={styles.clearBtn} style={{margin:"10px"}}>Clear Cart !</button>
    
      {/* Cart Items */}
      <div className={styles.container}>
        {cart.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} width="100" alt={item.title} />
            <h3>{item.title}</h3>
            <p>
              {item.price} × {item.quantity}
            </p>
            <p>
              Total: {(item.price * item.quantity).toFixed(2)} $
            </p>
            {/* Controls */}
            <div className={styles.cart}>
              <button
                onClick={() => handleQuantity(item.id, "plus")}
              >
                +
              </button>
              <p>{item.quantity}</p>
              <button
                onClick={() => handleQuantity(item.id, "minus")}
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <button
                onClick={() => handleQuantity(item.id, "delete")}
              >
                delete item
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.head} style={{paddingTop:"50px" , paddingBottom:"30px"}}>
        <h3>Cart Summary</h3>
        <p>Cart Items : {cartItemsCount} <em>Item</em></p>
        <p>Total Price is : {totalPrice.toFixed(2)} $</p>
        <button>Check Out</button>
      </div>
      <h3 style={{textAlign:"center" , margin:"30px" , fontSize:"25px" , fontWeight:"bolder"}}>You may also like</h3>

      <div className={styles.container} style={{paddingBottom:"60px"}}>
        {recommendations.map(item => (
          <div key={item.id} className={styles.item}>
            <img  src={item.image || item.thumbnail || "https://via.placeholder.com/150"} />
            <h4>{item.title}</h4>
            <p>{item.price} $</p>
            <button onClick={() => addToCart({ ...item, quantity: 1 })}>
              Add to Cart
            </button>

          </div>

        ))}
      </div>
    </div>
    </div>
  );
};

export default Cart;