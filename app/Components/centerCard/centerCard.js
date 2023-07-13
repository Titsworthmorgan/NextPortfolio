import Image from 'next/image'
import portPicture from '../../../public/Assets/Morgan-1003-LinkedIn.jpg'
import styles from './centerCard.module.scss'

export default function CenterCard(){

    return(
        <div className={styles.main}>
            <Image src={portPicture} width={200} height={210} className={styles.image}/>
            <div className={styles.textCard}>
                <h1>Morgan Titsworth</h1>
                <h3>Developer</h3>
            </div>
        </div>
    )
}