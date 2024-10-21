"use client";
import {forwardRef, useState} from 'react';

const Contact = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
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
        <section className='mt-48 flex flex-col justify-center items-center'>
            <h1 className="text-4xl font-bold">Get In Touch</h1>
            <span className="mt-2 mb-12 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent font-semibold">
                Lets Work Together
            </span>

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
                    <label htmlFor="service">Service</label> <br/>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className='w-full mt-1 p-3 bg-transparent border border-input_border_color rounded-lg outline-none'>
                        <option value="" disabled selected>Select a service</option>
                        <option value="backend">Backend</option>
                        <option value="frontend">Frontend</option>
                    </select>
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

Contact.displayName = 'Contact';
export default Contact;
