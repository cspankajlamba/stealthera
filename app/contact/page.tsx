import Image from 'next/image';
import Watch from '../images/watchnew.svg';
export default function Landing() {
    return <>
       <section className="gap2 flex justify-center items-center p-3 lg:justify-between py-8">
    <div className="subSec flex flex-col gap-2 items-center lg:w-[50%] lg:mx-auto">
        <div className="card flex justify-between gap-2 p-4 w-full lg:max-w-50 border-2 border-blue-400 rounded-lg font-semibold">
            <a href="https://www.linkedin.com/company/stealthera">LinkedIn</a>
            <a href="https://www.linkedin.com/company/stealthera">StealthEra</a>
        </div>
        <div className="card flex justify-between gap-2 p-4 w-full lg:max-w-50 border-2 border-blue-400 rounded-lg font-semibold">
            <a>Email</a>
            <a href="#">admin@stealthera.in</a>
        </div>
        <div className="card flex justify-between gap-2 p-4 w-full lg:max-w-50 border-2 border-blue-400 rounded-lg font-semibold">
            <a>Phone</a>
            <a href="#">+917827399863</a>
        </div>
    </div>
</section>

    </>
}