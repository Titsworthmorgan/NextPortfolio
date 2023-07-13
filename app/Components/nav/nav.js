import Link from 'next/link'
import styles from '../nav/nav.module.scss'
import i1 from '../../../public/Assets/Linkedin.png'
import Image from 'next/image'

export default function Nav(){
    return(
        <div className={styles.navBody}>
            <p>Connect with me here!</p>
            <Link href={'https://www.linkedin.com/in/morgan-titsworth/'}  className={styles.homeButton}>
                <Image src={i1} width={50} height={50}/>
            </Link>
        </div>
    )
}