import { createContext, useEffect, useMemo, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({children , value})=>{
    
    const normalize = (p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        category: p.category,
        brand: p.brand,
        image:  p.image ||
                p.images?.[0] ||    
                p.thumbnail ||
                "",
      });
const allProducts = useMemo(() => [
  ...(value?.products || []),
  ...(value?.mobileData || []),
  ...(value?.audioData || []),
  ...(value?.tabletData || []),
  ...(value?.storageData || [])
].map(normalize), [value]);
    

    const [cart , setCart] = useState(()=>{
        const saved = localStorage.getItem("cart")
        return saved?JSON.parse(saved):[]
     });
    

    useEffect(()=>{
        localStorage.setItem("cart" , JSON.stringify(cart))
    },[cart]);
    
    const addToCart = (product)=>{
        setCart((prev)=>{
            const exist = prev.find((item)=> item.id === product.id)
            if (exist){
                return prev.map(item=>
                    item.id === product.id?{
                        ...item,
                        quantity : item.quantity+ product.quantity,
                    }: item
                )
            }
            return[...prev,product]
        })
     
    };

    

    
    const handleQuantity = (id , operation)=>{
        if (operation === "delete") {
            setCart(prev => prev.filter(item => item.id !== id));
            return;
        }
        setCart(prev=>
            prev.map(item=>{
                if(item.id !==id) return item;
                let newQty = item.quantity;
                if (operation === "plus"){
                    newQty = item.quantity+1
                }else if(operation ==="minus"){
                    newQty = Math.max(1,item.quantity-1)
                }
                return{
                    ...item,
                    quantity : newQty
                }
            })
        )
    };

    // Calculate cart items count
    const cartItemsCount = cart.reduce((count, item) => count + (item.quantity || 0), 0);
    const clearCart = ()=>{
        setCart([])
    }
   
   
    const getRecommendations = (currentProduct, products, cart = []) => {
    const cartIds = new Set(cart.map((c) => c.id));
    const seen = new Set(); // helps prevent duplicates in the output

    return products
        .filter((p) => {
        if (!p) return false;
        if (p.id === currentProduct.id) return false;     // don’t recommend the same product
        if (!p.image) return false;                       // require a real image
        if (cartIds.has(p.id)) return false;              // avoid recommending cart items
        if (seen.has(p.id)) return false;                 // dedupe by id
        seen.add(p.id);
        return true;
        })
        .map((product) => {
        let score = 0;

        if (product.category === currentProduct.category) score += 3;
        if (product.brand === currentProduct.brand) score += 2;

        const currentTitle = (currentProduct.title || "").toLowerCase();
        const commonWords = (product.title || "")
            .toLowerCase()
            .split(" ")
            .filter((word) => word && currentTitle.includes(word));

        score += commonWords.length;

        return { ...product, score };
        })
        .filter((p) => p.score > 0)
        .sort((a, b) => b.score - a.score) // highest score on top
        .slice(0, 4); // returns only 4 top items
    };
    return(
        <DataContext.Provider value={{...(value || {}), allProducts , cart , addToCart , handleQuantity , cartItemsCount ,clearCart , getRecommendations}}>
            {children}
        </DataContext.Provider>
    )
}
