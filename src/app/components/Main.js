"use client"
import { useEffect, useState } from 'react';
import styles from './Main.module.css'; 
import Logo from './UI/Logo'; 
import SideBar from './SideBar';


const Main = () => {

    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/data'); 
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                const result = await response.json();
                setNewsData(result); 
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) return (
        <div className="h-screen relative bg-zinc-200 flex justify-center ">
           
               <h1 className={styles.loadingTitle}>Lade News...</h1>
                <div className={styles.loadingSpinner}></div>

        </div>
    );

    if (error) return <div>Error: {error}</div>;


    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                {newsData.map(item => (
                    <div key={item.id} className='flex border-b border-zinc-300 my-2'>
                        <div className='p-2 flex flex-col items-center'>
                            <Logo />
                            <button className={styles.button}> weiterlesen...</button>
                        </div>
                        <div className='mx-2 p-2'>
                            <h1>{item.title}</h1>
                            <p className={styles.inlineBlock}>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`bg-zinc-300 p-2 ${styles.sidebar}`}>
                <SideBar />
            </div>
                  
        </div>
    );
};

export default Main;



