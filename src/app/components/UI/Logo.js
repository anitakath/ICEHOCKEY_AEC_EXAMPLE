

//STYLES
import styles from './Logo.module.css'
import Image from 'next/image'
const Logo = () =>{


    return(
        <div className={styles.container}>
            <div className={styles.logo_div}>
                <Image src="/images/Adendorfer_EC.svg.png" alt="Logo vom Adendorfer Eishockeyclub" width={200} height={200} />
            </div>
        
        </div>
    )



}

export default Logo