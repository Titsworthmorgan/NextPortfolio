import Link from 'next/link'
import styles from '../nav/nav.module.scss'

export default function Nav(){
    return(
        <div className={styles.navBody}>
            <Link href={'/'}>
                <h1 className={styles.homeButton}>../Home</h1>
            </Link>
        </div>
    )
}