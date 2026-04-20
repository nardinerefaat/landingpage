import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({children , value})=>{
    
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

   
    return(
        <DataContext.Provider value={{...value , cart , addToCart , handleQuantity}}>
            {children}
        </DataContext.Provider>
    )
}
