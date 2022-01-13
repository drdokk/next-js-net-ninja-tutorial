import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet. Ut expedita praesentium sed recusandae enim
        et ipsam sint est error modi aut expedita earum nam expedita repellat.
        Est voluptatem deleniti cum aspernatur suscipit qui quam facilis.
      </p>
      <p>
        Sed omnis repellat sed asperiores veritatis et expedita optio. Ea fugit
        modi est voluptas ipsum aut impedit recusandae ut laudantium dolorum eum
        earum itaque.
      </p>

      <p>
        Cum dolor alias et pariatur rerum et nulla nobis non maxime esse aut
        numquam nobis. Qui esse nesciunt aut neque maxime aut quam nemo. Id
        velit veritatis est velit tempora ab voluptas perferendis ad explicabo
        odit ex eius veritatis.
      </p>

      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
