"use client";
import NavBar from "@/components/NavBar";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import {useRef, useState} from "react";
import Footer from "@/components/Footer";

export default function Page() {
    const [selected, setSelected] = useState("Home");

    const homeRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    // const servicesRef = useRef<HTMLElement>(null); // If Services is added later
    const projectsRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const navBarTitles = [
        { title: "Home", handleScroll: () => homeRef.current?.scrollIntoView({ behavior: 'smooth' }) },
        { title: "About", handleScroll: () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' }) },
        // { title: "Services", handleScroll: () => servicesRef.current?.scrollIntoView({ behavior: 'smooth' }) },
        { title: "Projects", handleScroll: () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' }) },
        { title: "Contact", handleScroll: () => contactRef.current?.scrollIntoView({ behavior: 'smooth' }) },
    ];
    // Experience, Education, Skills

    return (
        <div className="bg-background text-white">
            <NavBar selected={selected} handleSelected={setSelected} navTitles={navBarTitles}/>
            <div className="">
                <Home ref={homeRef}/>
                <About ref={aboutRef}/>
                <Projects ref={projectsRef}/>
                <Contact ref={contactRef}/>
                <Footer />
            </div>
        </div>
    );
}

