import Image from "next/image";
import {forwardRef, Ref} from "react";

const Home = forwardRef<HTMLElement, {}>((props, ref: Ref<HTMLElement>) => {
    return (
        <section ref={ref} className="relative h-screen container mx-auto">
            {/* Background Image */}
            <Image src='/background.svg' alt='background' layout='fill' objectFit='cover' priority={true}/>

            {/* Main Content - Positioned Person Image and Text */}
            <div
                className="absolute top-[130px] left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-6">
                {/* Person Image */}
                <Image src='/avatar.svg' alt='avatar' width={202} height={197} priority={true}/>

                {/* Text Content */}
                <article className="text-center">
                    <h1 className="text-5xl font-bold">Mieraf Jejaw</h1>
                    <h3 className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent text-xl font-semibold py-1">
                        Full-Stack Developer
                    </h3>
                    <p className="text-base text-text_color py-2">
                        I'm a full-stack developer focused on backend development, delivering scalable, secure solutions.
                        Skilled in databases, APIs, and cloud, I thrive in building efficient, high-performance applications.
                    </p>
                </article>

                {/* Contact Button */}
                {/*<button*/}
                {/*    className="border border-accent rounded-3xl text-white font-bold py-2 px-12 mt-8 hover:cursor-pointer transition">*/}
                {/*    Contact Me*/}
                {/*</button>*/}
            </div>
        </section>
    )
})

export default Home;