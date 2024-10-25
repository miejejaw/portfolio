"use client";
import {forwardRef, Ref, useState} from 'react';
import {SectionTitle} from "@/components/SectionTitle";

const Contact = forwardRef<HTMLElement, {}>((props, ref: Ref<HTMLElement>) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <section ref={ref} className='mt-48 flex flex-col justify-center items-center'>
            <SectionTitle title='Get In Touch' description='Lets Work Together'/>

            <div className='mb-16 w-[550px] space-y-4'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full mt-1 p-3 bg-transparent border border-input_border_color rounded-lg outline-none'
                        placeholder='Full name'
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full mt-1 p-3 bg-transparent border border-input_border_color rounded-lg outline-none'
                        placeholder='example@email.com'
                    />
                </div>

                <div>
                    <label htmlFor="message">Message</label> <br/>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className='w-full mt-1 p-3 bg-transparent border border-input_border_color rounded-lg outline-none'
                        rows={6}
                    ></textarea>
                </div>

                <input
                    type="submit"
                    id="submit"
                    name="submit"
                    value="Get In Touch"
                    className='w-full mt-1 p-3 bg-white text-black border border-input_border_color rounded-lg outline-none'
                />
            </div>
        </section>
    );
});

export default Contact;
