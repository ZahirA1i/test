import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
     About Page
     <div className={styles.main}> <Link href="/" className={styles.card}>Go Back</Link></div>
    </>
  )
}