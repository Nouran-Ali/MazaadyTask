import Image from "next/image";
import styles from "../styles/home.module.css";
import { useEffect } from "react";

export const ProductsSection = () => {

    const products = [
        {
            id: '1',
            src: "/../products/1.png",
            title: 'Six-piece clothing set (blouse - pants - hat and ...',
            price: "1000 EGP",
            days: "2",
            hours: "10",
            minutes: "50",
            tag: "Live auction",
            favorite: false,
        },
        {
            id: '2',
            src: "/../products/2.png",
            title: 'Six-piece clothing set (blouse - pants - hat and ...',
            price: "1000 EGP",
            days: "2",
            hours: "10",
            minutes: "50",
            tag: "Live auction",
            favorite: false,
        },
        {
            id: '3',
            src: "/../products/3.png",
            title: 'Jeep Car, new, used for only one time',
            price: "1000 EGP",
            days: "2",
            hours: "10",
            minutes: "50",
            tag: "hot sale",
            favorite: true,
        },
        {
            id: '4',
            src: "/../products/4.png",
            title: 'Six-piece clothing set (blouse - pants - hat and ...',
            price: "1000 EGP",
            days: "2",
            hours: "10",
            minutes: "50",
            tag: "Live auction",
            favorite: false,
        },
        {
            id: '5',
            src: "/../products/1.png",
            title: 'Jeep Car, new, used for only one time',
            price: "1000 EGP",
            days: "2",
            hours: "10",
            minutes: "50",
            tag: "hot sale",
            favorite: true,
        },
        {
            id: '6',
            src: "/../products/1.png",
            title: 'Six-piece clothing set (blouse - pants - hat and ...',
            price: "1000 EGP",
            days: "2",
            hours: "10",
            minutes: "50",
            tag: "Live auction",
            favorite: false,
        },
    ];

    const mediaQuery = window.matchMedia('(max-width: 1280px)');

    return (
        <div className="px-3">
            <h3 className={`text-[#333333] text-3xl max-xl:text-2xl font-bold my-3`}>Products <span className='text-[#828282] text-base font-normal'>( 12 )</span></h3>

            {products.map(({ src, title, price, days, hours, minutes, tag, favorite }, id) => (
                <>
                    <div className="flex justify-between max-xl:relative mt-8" key={id}>
                        <div className="flex items-center max-xl:justify-between max-xl:items-start">
                            <div className="xl:relative">
                                <img src={src} width={mediaQuery.matches ? 180 : 140} height={100} className='' alt={title}/>
                                {
                                    tag == "Live auction" ? <div className={styles.tag_image}>{tag}</div> : <div className={`${styles.tag_image} ${styles.hot_sale}`}>{tag}</div>
                                }

                            </div>
                            <div className="ml-5 text-lg max-xl:text-base">
                                <p className="text-[#333333]">{title}</p>
                                <p className="text-[#828282] mt-3 max-xl:mt-2">Starting price <span className="text-[#333333] text-xl max-lg:text-base font-semibold">{price}</span></p>
                                {
                                    mediaQuery.matches ? <>
                                        <p className="text-[#828282] mt-2 mr-3">Lot starts in</p>
                                        <div className="flex items-center mt-2 text-sm">
                                            <div className="text-[#FF951D] bg-[#FFF5E9] max-xl:p-1 max-xl:px-2 rounded-3xl mr-2">
                                                <span className="mr-1">{days}</span><span className="text-xs">Days</span>
                                            </div>
                                            <div className="text-[#FF951D] bg-[#FFF5E9] max-xl:p-1 max-xl:px-2 rounded-3xl mr-2">
                                                <span className="mr-1">{hours}</span><span className="text-xs">hours</span>
                                            </div>
                                            <div className="text-[#FF951D] bg-[#FFF5E9] max-xl:p-1 max-xl:px-2 rounded-3xl">
                                                <span className="mr-1">{minutes}</span><span className="text-xs">minutes</span>
                                            </div>
                                        </div>
                                    </>
                                        :
                                        <div className="flex items-center justify-between mt-3">
                                            <p className="text-[#828282] mr-3">Lot starts in</p>
                                            <div className="text-[#FF951D] bg-[#FFF5E9] font-semibold p-2 px-5 rounded-3xl mr-3">
                                                {days} <span className="text-sm">Days</span>
                                            </div>
                                            <div className="text-[#FF951D] bg-[#FFF5E9] font-semibold p-2 px-5 rounded-3xl mr-3">
                                                {hours} <span className="text-sm">hours</span>
                                            </div>
                                            <div className="text-[#FF951D] bg-[#FFF5E9] font-semibold p-2 px-5 rounded-3xl mr-3">
                                                {minutes} <span className="text-sm">minutes</span>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                        <div>
                            {
                                favorite == true ?
                                    <div className={styles.favorite_icon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" fill="#D20653" stroke="#FFF5E9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

                                    :
                                    <div className={styles.favorite_icon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.38 3.10001 10.99 3.98001 12 5.34001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001C22 15.69 15.52 19.82 12.62 20.81Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                            }
                        </div>
                    </div>
                </>
            ))}

        </div>
    )
}
