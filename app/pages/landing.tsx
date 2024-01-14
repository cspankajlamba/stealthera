import Image from 'next/image';
import style from '../styles/pages.module.css';
import Watch from '../images/watchnew.svg';
import WatchFeatures from '../images/watch-features.svg';
import Icon1 from '../images/icons/icon1.png';
import Icon2 from '../images/icons/icon2.png';
import Icon3 from '../images/icons/icon3.png';
import Icon4 from '../images/icons/icon4.png';



export default function Landing() {
    return <>
        <section className={style.heroSec}>
            <div className={style.subSec}>
                <h1 className={style.h1}>the ultimate <br />smart wearable</h1>
                <h3 className={style.h3}>join the future of <span className={style.span}>smart wearable</span> technology is here!</h3>
            </div>
            <div className={style.subSec}>
                <Image className={style.img} src={Watch} alt='' style={{ width: 'auto', height: 'auto' }} />
            </div>
        </section>
        <section className={style.featureSec}>
            <h1 className={style.h1}>your ai health coach</h1>
            <Image src={WatchFeatures} alt='' style={{ width: '80%', height: 'auto' ,marginLeft: '-5rem'}} />
        </section>
        <section className={style.bFeatureSec}>
            <div className={style.subSec}>
                <h1 className={style.h1}>Features of SMART StealthERA Band</h1>
                <h3 className={style.h3}>Keep a track of daily, weekly and monthly details for step count, calories burnt and sports duration seamlessly on the app.</h3>
            </div>
            <div className={style.subSec}>
                <div className={style.card}>
                    <Image src={Icon1} alt='icon' width={40} height={40}/>
                    <div style={{display: 'flex',flexDirection:'column'}}>
                        <a>SPO2</a>
                        <h4 className={style.h4}>Real Time Blood Oxyzen Level Monitoring.</h4>
                    </div>
                </div>
                <div className={style.card}>
                    <Image src={Icon2} alt='icon' width={40} height={40}/>
                    <div style={{display: 'flex',flexDirection:'column'}}>
                        <a>Calories</a>
                        <h4 className={style.h4}>Track Your Progress for Calories Burnt.</h4>
                    </div>
                </div>
                <div className={style.card}>
                    <Image src={Icon3} alt='icon' width={40} height={40}/>
                    <div style={{display: 'flex',flexDirection:'column'}}>
                        <a>Sleep</a>
                        <h4 className={style.h4}>Track All Stages of Sleep Every Night.</h4>
                    </div>
                </div>
                <div className={style.card}>
                    <Image src={Icon4} alt='icon' width={40} height={40}/>
                    <div style={{display: 'flex',flexDirection:'column'}}>
                        <a>Heart Rate</a>
                        <h4 className={style.h4}>24*7 Heart Rate Monitoring.</h4>
                    </div>
                </div>
            </div>
        </section>
        <section className={style.textFeature}>
            <li className={style.subSec}>
                <div className={style.h2}>personalized health status</div>
                <div className={style.h3}>band is continuously synchronized with the app to give you real-time insights of your health and personalized aicoach tips for your better health.</div>
            </li>
            <li className={style.subSec}>
                <div className={style.h2}>recharge your brain with the right amount of sleep</div>
                <div className={style.h3}>track your sleep and get ai coaching for better recovery of your health with stealthera app seamlessly!.</div>
            </li>
            <li className={style.subSec}>
                <div className={style.h2}>do not let anyone losing their lives!</div>
                <div className={style.h3}>stealthera smart band will give your nearby medical services and your emergency contacts about your crash or fall.</div>
            </li>
        </section>
        <section className={style.ctaSec}>
            <div className={style.card}>
                <a className={style.h2}>want to try smart band</a>
                <a href='/contact' className={style.btn}>CONTACT US</a>
            </div>
        </section>
    </>
}