import Image from 'next/image';
import Watch from '../images/watchnew.svg';
import WatchFeatures from '../images/watch-features.svg';
import Icon1 from '../images/icons/icon1.png';
import Icon2 from '../images/icons/icon2.png';
import Icon3 from '../images/icons/icon3.png';
import Icon4 from '../images/icons/icon4.png';
import { normalize } from 'path';
import Link from 'next/link';



export default function Landing() {
    return <>
        <section className="heroSec flex-center gap2 flex-space-between px-3 py-0">
            <div className="subSec flex-column gap2">
                <h1>the <br /><span>ultimate</span> <br />smart wearable</h1>
                <h3 style={{ color: '#0CA2FF', }}>be informed, be protected, be empowered</h3>
                <h3>join the future of smart wearable technology is here!</h3>
                <div className="btn p-2 px-8 font-semibold" style={{ width: 'fit-content', borderRadius: '8px' }}><Link href={'/contact'}>Subscribe</Link></div>
            </div>
            <div className='subSec flex'>
                <div className="comingSoon flex flex-col uppercase font-bold absolute text-[#5050508d] gap-12 -rotate-90" style={{ zIndex: 0 }}>
                    <a style={{color: '#fff'}}>Coming Soon</a>
                    <a>Coming Soon</a>
                    <a style={{color: '#fff'}}>Coming Soon</a>
                </div>
                <Image src={Watch} alt='' style={{ width: 'auto', height: 'auto', zIndex: 1 }} />
            </div>
        </section >
        {/* <section className='featureSec flex-column flex-center gap2'>
            <h1>your ai health coach</h1>
            <div className="subSec flex-center">
            <Image src={WatchFeatures} alt='' style={{ width: '60%', height: 'auto'}} />
            </div>
        </section>
        <section className='bFeatureSec flex-column flex-center gap4'>
            <div className='subSec align-center gap2 flex-column'>
                <h1>Features of SMART StealthERA Band</h1>
                <h3>Keep a track of daily, weekly and monthly details for step count, calories burnt and sports duration seamlessly on the app.</h3>
            </div>
            <div className='subSec flex gap2'>
                <div className='card flex-center gap1 p1'>
                    <Image src={Icon1} alt='icon' style={{width:'2rem', height:'2rem'}}/>
                    <div className='flex-column'>
                        <a>SPO2</a>
                        <h4>Real Time Blood Oxyzen Level Monitoring.</h4>
                    </div>
                </div>
                <div className='card flex-center gap1 p1'>
                    <Image src={Icon2} alt='icon' style={{width:'2rem', height:'2rem'}}/>
                    <div className='flex-column'>
                        <a>Calories</a>
                        <h4>Track Your Progress for Calories Burnt.</h4>
                    </div>
                </div>
                <div className='card flex-center gap1 p1'>
                    <Image src={Icon3} alt='icon' style={{width:'2rem', height:'2rem'}}/>
                    <div className='flex-column'>
                        <a>Sleep</a>
                        <h4>Track All Stages of Sleep Every Night.</h4>
                    </div>
                </div>
                <div className='card flex-center gap1 p1'>
                    <Image src={Icon4} alt='icon' style={{width:'2rem', height:'2rem'}}/>
                    <div className='flex-column'>
                        <a>Heart Rate</a>
                        <h4>24*7 Heart Rate Monitoring.</h4>
                    </div>
                </div>
            </div>
        </section>
        <section className='textFeature flex-column gap2'>
            <li className='subSec flex-column'>
                <h3>personalized health status</h3>
                <div>band is continuously synchronized with the app to give you real-time insights of your health and personalized aicoach tips for your better health.</div>
            </li>
            <li className='subSec flex-column'>
                <h3>recharge your brain with the right amount of sleep</h3>
                <div>track your sleep and get ai coaching for better recovery of your health with stealthera app seamlessly!.</div>
            </li>
            <li className='subSec flex-column'>
                <h3>do not let anyone losing their lives!</h3>
                <div>stealthera smart band will give your nearby medical services and your emergency contacts about your crash or fall.</div>
            </li>
        </section>
        <section className='ctaSec flex-center'>
            <div className='card flex-center gap3 p5 flex-column'>
                <h2>want to try smart band</h2>
                <a href='/contact' className='btn'>CONTACT US</a>
            </div>
        </section> */}
    </>
}