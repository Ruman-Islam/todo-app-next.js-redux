import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Landing from './Landing'

export default function Home() {
  return (
    <div>
      <Landing />
    </div>
  )
}
