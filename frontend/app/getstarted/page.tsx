'use client'
import React from 'react'
import styles from './getstarted.module.css'
import WalletConnector from '../../components/WalletConnector'
import Link from 'next/link'
import Image from 'next/image'

const GetStarted = () => {
  return (
    <div className={styles.container}>
      <WalletConnector />
      <h1 className={styles.title}>Get Started with EcoGuardian</h1>
      
      <div className={styles.boxContainer}>
        <Link href="/submitimage" className={styles.box}>
          <Image 
            src="/upload.webp"
            alt="Upload Images"
            width={200}
            height={200}
            className={styles.boxImage}
          />
          <h2 className={styles.boxTitle}>Upload Images</h2>
        </Link>
        
        <Link href="/redeemtoken" className={`${styles.box} ${styles.darkBox}`}>
          <Image 
            src="/redeem.jpeg"
            alt="Redeem Token"
            width={200}
            height={200}
            className={styles.boxImage}
          />
          <h2 className={styles.boxTitle}>Redeem Token</h2>
        </Link>
      </div>
    </div>
  )
}

export default GetStarted
