import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";
const products = [
  { id: 1, name: "Hydrating Cream", price: 29.99, image: "/cream1.png", alt: "Hydrating Cream" },
  { id: 2, name: "Vitamin C Serum", price: 34.99, image: "/cream2.png", alt: "Vitamin C Serum" },
  { id: 3, name: "Retinol Cream", price: 39.99, image: "/cream3.png", alt: "Retinol Cream" },
  { id: 4, name: "Moisturizer", price: 24.99, image: "/cream4.png", alt: "Moisturizer" },
  { id: 5, name: "Eye Cream", price: 27.99, image: "/cream5.png", alt: "Eye Cream" },
  { id: 6, name: "Face Wash", price: 19.99, image: "/cream6.png", alt: "Face Wash" },
  { id: 7, name: "Sunscreen", price: 31.99, image: "/cream7.png", alt: "Sunscreen" },
  { id: 8, name: "Night Cream", price: 44.99, image: "/cream8.png", alt: "Night Cream" },
];
export default function Home() {
  
  return (
    <section className={styles.body}>
      <section className={styles.overlay}>
      <nav className={styles.nav}>  
        <div className={styles.logoContainer}>
          <span className={styles.logoText}>Skin Bloom</span>
        </div>
        <ul className={styles.links}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/booking">Booking</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
      
          <li className={styles.linksLi}><Link href="/contact">BOOK NOW</Link></li>
        </ul>
          
      </nav>
      <h1 className={styles.title}>Reveal Your Natural</h1>
      <h1 className={styles.stitle}>Beauty</h1>
      <p className={styles.p}>
        Relax, refresh, and transform your look with our expert stylists.
      </p>
      
      <div style={{ 
        display: "flex", 
        flexDirection: "row", 
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        <button className={styles.button}>schedule an appointment</button>
        <button className={styles.button1}>view services</button>
      </div>
       </section>
       <section className={styles.overlay2}>
   <h2 className={styles.Title}>A Personalized Approach to Skin Health</h2>
   <p className={styles.pa}>Healthy skin requires more than basic care. We focus on understanding your unique skin type and providing treatments that restore balance, improve texture, and enhance your natural glow.</p>
 <button className={styles.button3}>Learn More</button>
          </section>
<section className={styles.secondSection}>
  <h2 className={styles.secondTitle}>Top selling products</h2>
 <div className={styles.im}>
<div className={styles.image}>
  <button className={styles.button2}>Shop Now</button>
 <Image  src="/cream1.png" alt="Image" width={80} height={80} className={styles.i} />
  </div>
  <div className={styles.image}>
  <button className={styles.button2}>Shop Now</button>
 <Image  src="/cream2.png" alt="Image" width={80} height={80} className={styles.i}/>
  </div>
   <div className={styles.image}>
  <button className={styles.button2}>Shop Now</button>
<Image  src="/cream3.png" alt="Image" width={80} height={80} className={styles.i}/>
  </div>
    <div className={styles.image}>
  <button className={styles.button2}>Shop Now</button>
<Image  src="/cream4.png" alt="Image" width={80} height={80} className={styles.i}/>
  </div>
    <div className={styles.image}>
  <button className={styles.button2}>Shop Now</button>
<Image  src="/cream5.png" alt="Image" width={80} height={80} className={styles.i}/>
  </div>


 <div className={styles.image}>
  <button className={styles.button2}>Shop Now</button>
  <Image  src="/cream6.png" alt="Image" width={80} height={80} className={styles.i}/>
  </div>
  <div className={styles.image}>
  <button className={styles.button2}>Shop Now</button>
 <Image  src="/cream7.png" alt="Image" width={80} height={80} className={styles.i}/>
  </div>
 
</div>


      </section>
      <section className={styles.st}>
        <p className={styles.secondTitle}>OUR SERVICES</p>
        <div className={styles.service1}> 
<div className={styles.service}>
 <Image  src="/m.png" alt="Image" width={200} height={200} className={styles.se}/>
 <p className={styles.sep}>Clinical Facial Care</p>
 <button className={styles.button7}>BOOK NOW</button>
 </div>
 <div className={styles.service}>
  <Image src="/ddu.png" alt="image" width={200} height={200} className={styles.se}/>
  <p className={styles.sep}>Acne Treatment Facial</p>
  <button className={styles.button7}>BOOK NOW</button>
  </div>
  <div className={styles.service}>
  <Image src="/scar.png" alt="image" width={200} height={200} className={styles.se}/>
  <p className={styles.sep}>Scar removal treatment</p>
  <button className={styles.button7}>BOOK NOW</button>
  </div>
   <div className={styles.service}>
  <Image src="/bri.png" alt="image" width={200} height={200} className={styles.se}/>
  <p className={styles.sep}>Brightening Facial</p>
  <button className={styles.button7}>BOOK NOW</button>
  </div>
  </div>
      </section>
    <section className={styles.overlay3}>

      </section>
    </section>
  
  );
}
