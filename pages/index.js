import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet. Ut expedita praesentium sed recusandae enim
        et ipsam sint est error modi aut expedita earum nam expedita repellat.
        Est voluptatem deleniti cum aspernatur suscipit qui quam facilis.
      </p>
      <Footer />
    </div>
  );
}
