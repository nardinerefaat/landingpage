import styles from "../styles/home.module.scss"
import { useState, useEffect} from "react"
import headsetBlack from '../images/blue headset.png'
import headsetGreen from '../images/green headset.png'
import headsetPink from '../images/pink headset.png'

const Home = () => {
  const headset = [
    {
      id:1,
      img:headsetBlack,
      background: `radial-gradient(
        rgb(206, 206, 206),
        rgb(136, 136, 136),
        rgb(49, 49, 49)
      )`,
      text:`rgb(0,0,0)`

    },
    {
      id:2,
      img:headsetPink,
      background: `radial-gradient(
        rgb(247, 247, 247),
        rgba(254, 229, 230),
        rgba(218, 157, 159)
      )`,
      text:`rgba(230, 169, 171)`
    },
    {
      id:3,
      img:headsetGreen,
      background:`radial-gradient(
        rgb(206, 206, 206),
        rgba(152, 215, 166),
        rgba(54, 168, 100)
      )`,
      text:` rgba(64, 178, 110)`
    }
   
  ]

  const [index , setIndex] = useState(0)
  
  // runs after the component loads
  // % makes the slider loop forever
  useEffect(()=>{
    const timer = setInterval(() => {
      setIndex(prev => (prev+1)%headset.length)

    }, 3000);

    // When the component disappears React will:stop the timer
    // This prevents memory leaks.
    return ()=> clearInterval(timer)

  },[headset.length])

  return (
    <div 
      className={styles.home}
      style={{background:headset[index].background}}
    >

    <div className={styles.text}
      style={{color:headset[index].text}}
    >
      <h1>High Quality Tech Gadgets And Accessories</h1>
      <button 
        data-testid="browse-btn"
        style={{background:headset[index].text, color:"white"}}
        onClick={()=>{
          const section = document.getElementById('featuredProducts')
          section.scrollIntoView({behavior:'smooth'})
     }}>Browse Products</button>
    </div>

      <div className={styles.slider}>
        {headset.map((item,i)=>{
          let position="hidden"
          if(i === index) { 
            position="active"
          }
          else if(i === (index+1)%headset.length) {
            position="preview"
          }

          return(
            <img
              key={i}
              src={item.img}
              alt={item.title}
              className={`${styles.headset} ${styles[position]}`}
            />
          )

        })}

      </div>
    
    </div>
  )
}

export default Home
