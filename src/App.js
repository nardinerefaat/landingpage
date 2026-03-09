import './App.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Features from './components/features'
import Testimonials from './components/testimonials'
import Footer from './components/footer'
import ProductCategory from './components/productcategory'
import { useState , useEffect } from 'react'


function App() {

  const[products,setProducts] = useState([])
  const[mobileData , setMobileData] = useState([])
  const[audioData , setAudioData] = useState([])
  const[tabletData , setTabletData] = useState([])
  const[storageData , setStorageData] = useState([])
  const [loading,setLoading] = useState(true)
  const[darkMode , setDarkMode]= useState(true)

  const handleDarkMode = ()=>{
    setDarkMode(!darkMode)
  }
  
  useEffect(()=>{
      const loadData = async()=>{
        try{
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


  

  return (
    <div className="layout">
      <Navbar 
          darkMode = {darkMode}
          handleDarkMode={handleDarkMode}
      />
      <main className="content">
        <section id="home"><Home /></section>
        <section id="features">
          <Features 
            products = {products}
            mobileData = {mobileData}
            audioData = {audioData}
            tabletData = {tabletData}
            storageData = {storageData}
            darkMode = {darkMode}
            handleDarkMode={handleDarkMode}
            />

        </section>
        <section id="productCategory">
          <ProductCategory 
            products = {products}
            mobileData = {mobileData}
            audioData = {audioData}
            tabletData = {tabletData}
            storageData = {storageData}
            darkMode = {darkMode}
            handleDarkMode={handleDarkMode}
          />
        </section>
        <section id="testimonials">
            <Testimonials 
              darkMode = {darkMode}
              handleDarkMode={handleDarkMode}
            
            />
        </section>
        <section id="footer">
            <Footer 
              darkMode = {darkMode}
              handleDarkMode={handleDarkMode}
            />
        
        </section>
      </main>
    </div>
  )
}

export default App