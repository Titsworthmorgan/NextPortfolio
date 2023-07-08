// @ts-ignore
import styles from './footer.module.scss'
import BlockContent from '@sanity/block-content-to-react'
export default function Footer({ recos }){
    console.log(recos)
    return(
        <div className={styles.footerBody}>
            <div  className={styles.recoBody}>
                {recos.map((recoms) => (
                    <div key={recoms._id}>
                        <h2>{recoms.name}</h2>
                        <BlockContent blocks={recoms.content} />
                    </div>
                ))}
            </div>
        </div>
    )
}