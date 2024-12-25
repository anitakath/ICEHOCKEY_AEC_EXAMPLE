import Link from "next/link"
//COMPONENTS
import Countdown from "./SideBar/Countdown"
import NextGame from "./SideBar/NextGame"
//STYLES 
import styles from './SideBar.module.css'
import Image from "next/image"


const SideBar = () =>{


    return(
        <div className="flex flex-col items-center">
            <Countdown/>
            <div className="h-14  flex justify-center items-end">
                <Link href="/" className={styles.link}> Ticketshop Heimspiele </Link>
            </div>
         

            <NextGame/>

            <div className="bg-blue-200 w-full m-2 h-40 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <h1> Ticketshop </h1>
            </div>
            <div className="bg-blue-200 w-full m-2 h-40 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <h1> DIE AEC APP </h1>
            </div>

        </div>
    )
}

export default SideBar