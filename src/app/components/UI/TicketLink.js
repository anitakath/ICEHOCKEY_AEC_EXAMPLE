
import Link from "next/link"
import styles from './TicketLink.module.css'

const TicketLink = () =>{


    return(
        <div className="w-full">
            <Link href="/" className={styles.link}> Ticketshop Heimspiele </Link>
        </div>
    )
}

export default TicketLink