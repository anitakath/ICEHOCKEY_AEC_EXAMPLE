import Link from "next/link"
//COMPONENTS
import Countdown from "./SideBar/Countdown"
import NextGame from "./SideBar/NextGame"
import TicketLink from "./UI/TicketLink"
//STYLES 
import styles from './SideBar.module.css'
import Image from "next/image"


const SideBar = () =>{


    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <Countdown/>
                <div className={styles.nextGameDiv}>
                    <TicketLink/>
                    <NextGame/>
                </div>

            </div>

            <div className={styles.subContainer}>
                <div className={styles.card}>
                    <h1> Ticketshop </h1>
                </div>
                <div className={styles.card}>
                    <h1> DIE AEC APP </h1>
                </div>
            </div>


        </div>
    )
}

export default SideBar