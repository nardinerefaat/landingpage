import Footer from "./footer";
import { render , screen } from "@testing-library/react";

test('links of contacts ' , ()=>{
    render(<Footer/>)
    const links = screen.getAllByRole("link")
    expect(links.length).toBeGreaterThan(0)
})


