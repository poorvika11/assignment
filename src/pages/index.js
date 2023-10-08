// src/pages/index.js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/auth"); // Redirect to the authentication page
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Next.js" />
        <link rel="icon" href="/next.svg" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>JetProtocol</div>
        <nav className={styles.nav}>
          <span className={styles.navItem}>Products</span>
          <span className={styles.navItem}>DAO</span>
          <span className={styles.navItem}>Build</span>
          <span className={styles.navItem}>Docs</span>
          <button className={styles.authButton} onClick={handleLogin}>
            Authenticate
          </button>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={`${styles.blackBackground} ${styles.textContainer}`}>
            <h1>The Next Generation of DeFi Governance</h1>
            <h2 className={styles.cursiveText}>of DeFi Governance</h2>
            <p>
              Experience open-source, transparent, and efficient borrowing and lending on Salona
            </p>
          </div>
          <div className={styles.buttons}>
          <button className={styles.authButton} >
            Read Docs
          </button>
          
          <button className={styles.authButton} >
            How it Works?
          </button>
          </div>
        </div>
      </main>

        

      <footer className={styles.footer}>
        <div className={styles.logo}>SINO</div>
      </footer>
    </div>
  );
}
