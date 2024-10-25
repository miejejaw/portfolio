import {forwardRef, Ref} from "react";
import {SectionTitle} from "@/components/SectionTitle";

const About = forwardRef<HTMLElement, {}>((props, ref: Ref<HTMLElement>) => {
    return (
        <section ref={ref} className='text-center mx-auto mt-4 max-w-4xl'>
            <SectionTitle title='About Me' description='Get to know me'/>


            <div className='mt-12 text-text_color space-y-6 text-md font-extralight'>
                <p className=''>
                    Hi there! I'm [Your Name], a data scientist specializing in data analytics, predictive modeling,
                    natural language processing, machine learning, and AI chatbots. With a passion for unraveling
                    insights from
                    complex datasets, I'm dedicated to helping businesses make informed decisions and stay ahead in
                    today's data-driven world.
                </p>

                <p className=''>
                    I bring a blend of technical expertise, hands-on experience, and a commitment to clear
                    communication to every project.
                    Whether it's uncovering hidden patterns, predicting future trends, or automating processes with
                    AI, I'm here to
                    help you harness the full potential of your data.
                </p>

                <p className=''>
                    Let's work together to transform your data into actionable insights that drive real results. Get
                    in touch,
                    and let's start unlocking the power of your data today!
                </p>
            </div>

            <button className='mt-8 px-8 py-2 border border-accent rounded-2xl'>Download Resume</button>
        </section>
    )
})

export default About