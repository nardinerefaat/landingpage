import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Features from './components/features'
import Testimonials from './components/testimonials'
import Footer from './components/footer'
import ProductCategory from './components/productcategory'
import { useState , useEffect } from 'react'
import Cart from './pages/cart'
import { useLocalStorage } from './hooks/useLocalStorage'
import { BrowserRouter as Router, Routes , Route  } from 'react-router-dom'
import { DataProvider } from './context/DataContext'


function App() {

  const[products,setProducts] = useLocalStorage("products",[])
  const[mobileData , setMobileData] = useLocalStorage( "mobileData",[])
  const[audioData , setAudioData] = useLocalStorage("audioData",[])
  const[tabletData , setTabletData] = useLocalStorage("tabletData",[])
  const[storageData , setStorageData] = useLocalStorage("storageData",[])
  const [loading,setLoading] = useState(true)
  const[darkMode , setDarkMode]= useState(true)

  const handleDarkMode = ()=>{
    setDarkMode(prev=>!prev)
  }
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // eslint-disable-next-line
  useEffect(()=>{
    const loadData = async()=>{
        // if data is already existed skip fetching 
      try{
        if(
          products.length &&
          mobileData.length &&
          audioData.length &&
          tabletData.length &&
          storageData.length 
        ){setLoading(false)
          return;}
        
          const laptopRes = await fetch('https://dummyjson.com/products/search?q=laptop')
          const laptopData = await laptopRes.json()

          const mobileRes = await fetch('mobileData.json')
          const mobile = await mobileRes.json()

          const audioRes = await fetch('audioandvisuals.json')
          const audio = await audioRes.json()

          const tabletRes = await fetch('tablets.json')
          const tablets = await tabletRes.json()

          const storageRes = await fetch('storage.json')
          const storage = await storageRes.json()

          setProducts(laptopData.products)
          setMobileData(mobile.productsMobile)
          setAudioData(audio.audioandvisuals)
          setTabletData(tablets.tablets)
          setStorageData(storage.storage)
          setLoading(false)

        }catch(err){
          console.log(err);
          
        }
      } 
      loadData()
    },[])
    
   if(loading){
    return <h2 style={{textAlign:"center"}}>Loading Products...</h2>
  }


  const MainPage = ()=>{
    return(
    <div className="layout">

    <Navbar/>
      <main className="content">
        <section id="home"><Home /></section>
        <section id="features">
          <Features/>
        </section>
        <section id="productCategory">
          <ProductCategory />
        </section>
        <section id="testimonials">
            <Testimonials />
        </section>
        <section id="footer">
            <Footer />
        </section>
      </main>
    </div>
   
  )
  }

  return (

      <Router>
        <DataProvider
          value={{
            products,
            mobileData,
            audioData,
            tabletData,
            storageData,
            darkMode,
            handleDarkMode
          }}
        >
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </DataProvider>
      </Router>
      
  )
}

export default App