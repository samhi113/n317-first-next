'use client';
import homeStyles from "@/app/page.module.css";

export default function Home() {

  const headerStyle = {
    backgroundColor: "lightcoral",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const myName = ["Sam-I-Am", "Sam", "Hi"];
  const isItTue = false;

  function openModal() {
    console.log("Open");
  }

  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <h1
      style= {headerStyle}>Next.js App</h1>
      <p className={homeStyles.callout}>
        This is a very sunny day here in Rainyvi. Suprisingly it's not the sunniest day this week. Signing off, {myName}.
      </p>
      <button onClick={openModal}>View Sun</button>
      <p>Is it Tuesday: {isItTue}</p>
    </main>
  )
}