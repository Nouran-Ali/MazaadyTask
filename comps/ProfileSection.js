import React from 'react'
import Image from "next/image";
import { FollowBtn } from './Buttons';
import styles from "../styles/home.module.css";

export const ProfileSection = () => {
    return (
        <>
            <div className="p-6 bg-white rounded-3xl">
                <Image src="/../users/hala2.png" width={100} height={100} className='' />
                <h3 className={`${styles.title} my-3`}>Hala Ahmed</h3>
                <p className={styles.paragragh}>I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.</p>
                <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-3 max-xl:gap-3 mt-5 text-xs">
                    <div className='flex items-center bg-[#FFF5E9] py-3 px-2 max-xl:px-1 rounded-2xl'>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path opacity="0.4" d="M3.41003 22C3.41003 18.13 7.26003 15 12 15C12.96 15 13.89 15.13 14.76 15.37" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C21.21 20.42 20.94 20.74 20.63 21C19.93 21.63 19.01 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.74 14.58 15.61 15.5 14.88C16.19 14.33 17.06 14 18 14C20.21 14 22 15.79 22 18Z" stroke="#FF951D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.44 18L17.43 18.99L19.56 17.02" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <div className='ml-1'>
                            <p className='text-base font-semibold'>5</p>
                            <p className='text-[#FF951D]'>Following</p>
                        </div>
                    </div>
                    <div className='flex items-center bg-[#FFF5E9] py-3 px-2 max-xl:px-1 rounded-2xl'>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path opacity="0.4" d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path opacity="0.4" d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>

                        <div className='ml-1'>
                            <p className='text-base font-semibold'>20</p>
                            <p className='text-[#FF951D]'>Followers</p>
                        </div>
                    </div>
                    <div className='flex items-center bg-[#FFF5E9] py-3 px-2 max-xl:px-1 rounded-2xl'>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.29 4.14002L17.22 7.93C17.21 8.45 17.54 9.14002 17.96 9.45002L20.44 11.33C22.03 12.53 21.77 14 19.87 14.6L16.64 15.61C16.1 15.78 15.53 16.37 15.39 16.92L14.62 19.86C14.01 22.18 12.49 22.41 11.23 20.37L9.46999 17.52C9.14999 17 8.39 16.61 7.79 16.64L4.45003 16.81C2.06003 16.93 1.38002 15.55 2.94002 13.73L4.92 11.43C5.29 11 5.46 10.2 5.29 9.66001L4.28005 6.43C3.69005 4.53 4.75004 3.48002 6.64004 4.10002L9.59005 5.07002C10.09 5.23002 10.84 5.12001 11.26 4.81001L14.34 2.59001C16 1.39001 17.33 2.09002 17.29 4.14002Z" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path opacity="0.4" d="M21.91 22L18.88 18.97" stroke="#FF951D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <div className='ml-1'>
                            <p className='text-base font-semibold'>4.2 <span className='text-[#828282] text-xs font-normal'>( 15 )</span></p>
                            <p className='text-[#FF951D]'>Rate</p>
                        </div>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <FollowBtn label="Follow" />
                </div>
            </div>
        </>
    )
}
