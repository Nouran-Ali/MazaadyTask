import Image from "next/image";
import styles from "../styles/home.module.css";
import QRCode from "react-qr-code";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

export const QrCode = () => {

    const mediaQuery = window.matchMedia('(max-width: 1280px)');
    const [isQrCodeVisible, setIsQrCodeVisible] = useState(true);
    const [isArrowClicked, setIsArrowClicked] = useState(false);

    const toggleQrCodeVisibility = () => {
        setIsQrCodeVisible(prev => !prev);
        if (isArrowClicked == true) {
            setIsArrowClicked(false);
        } else {
            setIsArrowClicked(true);
        }
    };

    return (
        <>
            <div className="p-6 bg-white rounded-3xl my-7">
                <div className="flex items-center justify-between">
                    <h3 className={`${styles.title} `}>QR Code</h3>
                    <div className="flex items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42001 13.98 8.42001 12C8.42001 10.02 10.02 8.42 12 8.42C13.98 8.42 15.58 10.02 15.58 12Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47 3.72 5.18 5.8 2.89 9.4C1.99 10.81 1.99 13.18 2.89 14.59C5.18 18.19 8.47 20.27 12 20.27Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-5">
                            <path d="M21.9902 17.6236V17.6185C21.8226 15.3601 19.7462 13.6542 17.3508 13.8096C16.026 13.8936 14.8851 14.5301 14.1497 15.4594L10.5377 13.7943C10.6701 13.3513 10.7269 12.8904 10.6918 12.4219C10.6593 11.9458 10.5323 11.4926 10.343 11.075L13.6793 8.97196C14.539 9.7969 15.7638 10.2807 17.0858 10.1941C18.2376 10.1203 19.3082 9.61612 20.0707 8.79628C21.6469 7.09039 21.463 4.501 19.6516 3.01408C18.781 2.29608 17.6455 1.93962 16.4883 2.00837C14.0902 2.16877 12.2788 4.12163 12.4437 6.38003C12.4816 6.8587 12.6032 7.30936 12.7925 7.72692L9.46162 9.83C8.60187 9.00506 7.37983 8.5213 6.06046 8.60787C3.65693 8.76318 1.8455 10.716 2.01042 12.9744C2.16723 15.2328 4.24903 16.9413 6.64714 16.7885C7.79889 16.7147 8.86953 16.2156 9.63195 15.3958C9.70224 15.3118 9.77254 15.2277 9.84013 15.1412L13.4522 16.8012C13.3251 17.2417 13.2683 17.7025 13.2981 18.1812C13.463 20.4396 15.5367 22.1455 17.9402 21.9902C20.3383 21.8349 22.1497 19.882 21.9902 17.6236ZM16.6046 3.50039C17.3346 3.45456 18.0564 3.68371 18.6107 4.13691C19.1649 4.59521 19.5029 5.23683 19.5516 5.92173C19.657 7.35773 18.5053 8.60278 16.9804 8.70207C15.4583 8.80137 14.1389 7.71673 14.0335 6.28073C13.928 4.84473 15.0798 3.59968 16.6046 3.50039ZM6.54441 15.2965C5.01956 15.3958 3.70019 14.3111 3.59475 12.8802C3.48931 11.4417 4.63294 10.1992 6.16049 10.0999C6.89317 10.049 7.61775 10.2781 8.16658 10.7364C8.72083 11.1896 9.05878 11.8312 9.11285 12.5161C9.21829 13.9547 8.06655 15.1972 6.54441 15.2965ZM17.8293 20.4982C16.3099 20.5975 14.9878 19.5128 14.8824 18.0768C14.7769 16.6434 15.9287 15.4009 17.4535 15.3016C18.9811 15.2074 20.3005 16.2869 20.4059 17.7229C20.5059 19.1615 19.3569 20.404 17.8293 20.4982Z" fill="#333333" stroke="#333333" stroke-width="0.2" />
                        </svg>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-5">
                            <path d="M9 11V17L11 15" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 17L7 15" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        {
                            mediaQuery.matches && <button className={`${isArrowClicked ? styles.arrow_qr : ''} ml-5 bg-[#FBE7EE] px-1 rounded-full`} onClick={toggleQrCodeVisibility}><KeyboardArrowDownIcon /></button>
                        }
                    </div>
                </div>

                {isQrCodeVisible &&
                    <>
                        <div className='flex items-center bg-[#FFF5E9] p-2 px-3 mt-3 rounded-2xl'>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                        <path d="M9 11V17L11 15" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 17L7 15" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>

                            <div className='ml-3'>
                                <p className='text-base'>Download the QR code or share it with your friends.</p>
                            </div>
                        </div>

                        <div className={`${styles.border_QR} rounded-2xl mt-4 p-6 text-center`}>
                            <div className="bg-white rounded-2xl py-4">
                                <Image src="/../logo2.png" width={140} height={100} className='mx-auto' />
                                <h3 className={`${styles.title} my-3`}>Hala Ahmed</h3>
                                <div className="flex justify-center mb-3">
                                    <QRCode value="https://worldbarcodes.com/qr-code/"
                                        size={256}
                                        style={{ height: "auto", maxWidth: "100%", width: "40%" }}
                                        viewBox={`0 0 256 256`} />
                                </div>
                                <p className={styles.paragragh}>Follow Us on Mazaady</p>
                            </div>
                        </div>
                    </>
                }

            </div>
        </>
    )
}
