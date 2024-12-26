import Image from "next/image";
import Main from "./components/Main";


//COMPONENTS
import TicketLink from "./components/UI/TicketLink";


export default function Home() {
  return (
    <div className="w-4/5 ">

      <Main/>
      <TicketLink/>

      
    </div>
  );
}
