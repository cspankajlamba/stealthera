import Image from 'next/image';
import Watch from '../images/watchnew.svg';
export default function Landing() {
    return <>
        <section className="heroSec gap2 flex-space-between p3">
            <div className="subSec flex-column gap2">
                <div className="card flex-space-between gap2" style={{ padding: "1rem 2rem", border: ".3rem solid #0CA2FF", borderRadius: ".8rem", fontWeight: '500' }}><a>LinkedIn</a><a href="https://www.linkedin.com/company/stealthera">StealthEra</a></div>
                <div className="card flex-space-between gap2" style={{ padding: "1rem 2rem", border: ".3rem solid #0CA2FF", borderRadius: ".8rem", fontWeight: '500' }}><a>Email</a><a href="#">admin@stealthera.in</a></div>
                <div className="card flex-space-between gap2" style={{ padding: "1rem 2rem", border: ".3rem solid #0CA2FF", borderRadius: ".8rem", fontWeight: '500' }}><a>Phone</a><a href="#">+917827399863</a></div>
            </div>
        </section>
    </>
}