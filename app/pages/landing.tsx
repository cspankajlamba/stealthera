import Image from 'next/image';
// import Watch from '../images/band.jpg';
// import WatchFeatures from '../images/watch-features.svg';
// import Icon1 from '../images/icons/icon1.png';
// import Icon2 from '../images/icons/icon2.png';
// import Icon3 from '../images/icons/icon3.png';
// import Icon4 from '../images/icons/icon4.png';
import { normalize } from 'path';
import Link from 'next/link';



export default function Landing() {
    return <>
        <div className="max-w-[85rem] mx-auto px-12 sm:px-6 lg:px-8 h-screen grid md:grid-cols-2 gap-12 md:gap-8 xl:gap-20 md:items-center">
            <div>
                <p className="mt-12 text-lg text-white dark:text-white">The Ultimate Smart Wearable</p>
                <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Join the future of smart wearable technology <span className="text-[#6A32D9]">is here!</span></h1>
                <p className="mt-3 text-lg text-white dark:text-white">be informed, be protected, be empowered</p>

                {/* <!-- Buttons --> */}
                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                    <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#6A32D9] text-white hover:bg-[#0CA2FF] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/contact">
                        Subscribe Now
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </a>
                    <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/contact">
                        Contact us
                    </a>
                </div>
                {/* <!-- End Buttons --> */}
                
            </div>
            <div className="relative ms-4 py-16 md:px-12">
                <img className="w-100 rounded-md" src='/band.jpg' alt="Image Description" />
                <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
            </div>
        </div>

        {/* <section classNameName='featureSec flex-column flex-center gap2'>
            <h1>your ai health coach</h1>
            <div classNameName="subSec flex-center">
            <Image src={WatchFeatures} alt='' style={{ width: '60%', height: 'auto'}} />
            </div>
        </section>
        <section classNameName='bFeatureSec flex-column flex-center gap4'>
            <div classNameName='subSec align-center gap2 flex-column'>
                <h1>Features of SMART StealthERA Band</h1>
                <h3>Keep a track of daily, weekly and monthly details for step count, calories burnt and sports duration seamlessly on the app.</h3>
            </div>
            <div classNameName='subSec flex gap2'>
                <div classNameName='card flex-center gap1 p1'>
                    <Image src={Icon1} alt='icon' style={{width:'2rem', height:'2rem'}}/>
                    <div classNameName='flex-column'>
                        <a>SPO2</a>
                        <h4>Real Time Blood Oxyzen Level Monitoring.</h4>
                    </div>
                </div>
                <div classNameName='card flex-center gap1 p1'>
                    <Image src={Icon2} alt='icon' style={{width:'2rem', height:'2rem'}}/>
                    <div classNameName='flex-column'>
                        <a>Calories</a>
                        <h4>Track Your Progress for Calories Burnt.</h4>
                    </div>
                </div>
                <div classNameName='card flex-center gap1 p1'>
                    <Image src={Icon3} alt='icon' style={{width:'2rem', height:'2rem'}}/>
                    <div classNameName='flex-column'>
                        <a>Sleep</a>
                        <h4>Track All Stages of Sleep Every Night.</h4>
                    </div>
                </div>
                <div classNameName='card flex-center gap1 p1'>
                    <Image src={Icon4} alt='icon' style={{width:'2rem', height:'2rem'}}/>
                    <div classNameName='flex-column'>
                        <a>Heart Rate</a>
                        <h4>24*7 Heart Rate Monitoring.</h4>
                    </div>
                </div>
            </div>
        </section>
        <section classNameName='textFeature flex-column gap2'>
            <li classNameName='subSec flex-column'>
                <h3>personalized health status</h3>
                <div>band is continuously synchronized with the app to give you real-time insights of your health and personalized aicoach tips for your better health.</div>
            </li>
            <li classNameName='subSec flex-column'>
                <h3>recharge your brain with the right amount of sleep</h3>
                <div>track your sleep and get ai coaching for better recovery of your health with stealthera app seamlessly!.</div>
            </li>
            <li classNameName='subSec flex-column'>
                <h3>do not let anyone losing their lives!</h3>
                <div>stealthera smart band will give your nearby medical services and your emergency contacts about your crash or fall.</div>
            </li>
        </section>
        <section classNameName='ctaSec flex-center'>
            <div classNameName='card flex-center gap3 p5 flex-column'>
                <h2>want to try smart band</h2>
                <a href='/contact' classNameName='btn'>CONTACT US</a>
            </div>
        </section> */}
    </>
}
