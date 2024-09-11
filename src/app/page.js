"use client";
import homeStyles from "@/app/page.module.css";

export default function Home() {

  return (
    <main className={homeStyles.html}>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#productSec">Products</a>
          </li>
          <li>
            <a href="#cart">Cart</a>
          </li>
        </ul>
      </nav>
      <h1 id="top" className={homeStyles.headerStyle}>Product & Co.</h1>
      <div id="productSec" className={homeStyles.products}>
        <div className={homeStyles.oneProduct}>
          <img src="https://picsum.photos/720/720" alt="Sample photo." title="Sample photo."  className={homeStyles.prodImg}/>
          <div className={homeStyles.prodDesc}>
            <h3 className={homeStyles.prodTitle}>Product 1</h3>
            <p className={homeStyles.prodText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ratione nulla nisi hic, quis sapiente vero incidunt modi repudiandae aspernatur, sequi totam dignissimos! Dolores dolore impedit tempora rem sint?</p>
            <a href="#" className={homeStyles.prodPrice}>$19.99</a>
          </div>
        </div>
        <div className={homeStyles.oneProduct}>
        <img src="https://picsum.photos/1080/1080" alt="Sample photo." title="Sample photo."  className={homeStyles.prodImg}/>
          <div className={homeStyles.prodDesc}>
            <h3 className={homeStyles.prodTitle}>Product 2</h3>
            <p className={homeStyles.prodText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolorem hic quibusdam. Iste, non blanditiis? Maiores optio dolores eos ad aut qui, voluptates sequi corrupti quam laudantium beatae doloribus voluptatum. Possimus fugit harum quam voluptatibus laborum?</p>
            <a href="#" className={homeStyles.prodPrice}>$24.99</a>
          </div>
        </div>
      </div>
    </main>
  )
}