'use client'
import Image from 'next/image'
import portPicture from '../../../public/Assets/Morgan-1003-LinkedIn.jpg'
import styles from './centerCard.module.scss'
import { useSpring, animated, easings, } from 'react-spring'
import { useState } from 'react'

export default function CenterCard(){
    let titleIn = {
        from: {opacity: 0, x: 800, y: -50},
        to: {opacity: 1, x: 0, y: -50},
        delay: 0,
        config: { duration: 3000, easing: easings.easeOutQuart },
    }
    let titleOut = {
        from: {opacity: 1, x: 0, y: -50},
        to: {opacity: 0, x: 800, y: -50},
        delay: 0,
        config: { duration: 3000, easing: easings.easeOutQuart },
    }

    const [stylesMove, setStylesmove] = useState([titleIn, titleOut])
    const [count, setCount] = useState(0)
    const titleSpringIn = useSpring(stylesMove[0])
    const titleSpringOut = useSpring(stylesMove[1])

    function swapPos() {
        switch (count) {
            case 0:
                setStylesmove([titleIn, titleOut])
                setCount(1)
            break
            case 1:
                setStylesmove([titleOut, titleIn])
                setCount(2)
            break
            case 2:
                setStylesmove([titleOut, titleIn])
                setCount(3)
            break
            case 3: 
                setStylesmove([titleIn, titleOut])
                setCount(0)
            break
        }
      }
      setTimeout(swapPos, 5000)

    return(
        <div className={styles.main}>
            <Image src={portPicture} width={200} height={210} className={styles.image}/>
            <div className={styles.textCard}>
                <h1>Morgan Titsworth</h1>
                <div className={styles.headers}>
                    <animated.h3 style={{...titleSpringOut}}>Developer</animated.h3>
                    <animated.h3 style={{...titleSpringIn}}>Veteran</animated.h3>
                </div>
            </div>
        </div>
    )
}