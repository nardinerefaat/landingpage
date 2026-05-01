import { render , screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataContext, DataProvider } from "./DataContext";
import { useContext } from "react";


// Create fake localStorage

const TestComponent = ()=>{
    const {cart , addToCart , handleQuantity} = useContext(DataContext)
    return(
        <div>
            <button onClick={()=>addToCart({id:1 , quantity:1})}>
                Add
            </button>
            <button onClick={()=>handleQuantity(1 , "plus")}>
                Plus
            </button>
            <button onClick={()=>handleQuantity(1 , "minus")}>
                Minus
            </button>
            <button onClick={()=>handleQuantity(1 , "delete")}>
                Delete
            </button>

            <p data-testid="cart-length"> {cart.length}</p>
            <p data-testid="quantity">{cart[0]?.quantity||0} </p>
           
        </div>
    )
}

test('cart behavior works',async()=>{
    const user = userEvent.setup()
    render(
        <DataProvider>
            <TestComponent/>
        </DataProvider>
    )

    expect(screen.getByTestId("quantity")).toBeInTheDocument()
    
    await user.click(screen.getByText("Add"))
    expect(screen.getByTestId("cart-length")).toHaveTextContent("1")
    expect(screen.getByTestId("quantity")).toHaveTextContent("1")


    await user.click(screen.getByText("Plus"))
    expect(screen.getByTestId("quantity")).toHaveTextContent("2")
    

    await user.click(screen.getByText("Minus"))
    expect(screen.getByTestId("quantity")).toHaveTextContent("1")
    
    await user.click(screen.getByText("Delete"))
    expect(screen.getByTestId("cart-length")).toHaveTextContent("0")

})
 