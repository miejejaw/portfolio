import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-footerBg text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Developer Info */}
                <div className="mb-4 md:mb-0 space-y-2">
                    <h3 className="text-xl font-semibold">Mieraf Jejaw</h3>
                    <p className="text-sm text-gray-400">Full-Stack Developer</p>
                    <p className="text-sm text-gray-400">mierafjejaw@gmail.com</p>
                    <p className="text-sm text-gray-400">Addis Ababa, Ethiopia</p>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6">
                    {/* GitHub */}
                    <a
                        href="https://github.com/miejejaw"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-gray-400"
                    >
                        <FaGithub size={30} className="text-gray-500 hover:text-gray-300" />
                    </a>

                    {/* LeetCode */}
                    <a
                        href="https://leetcode.com/u/miejejaw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LeetCode"
                        className="hover:text-gray-400"
                    >
                        <SiLeetcode size={30} className="text-yellow-500 hover:text-yellow-400" />
                    </a>

                    {/* Codeforces */}
                    <a
                        href="https://codeforces.com/profile/miejejaw"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Codeforces"
                        className="hover:text-gray-400"
                    >
                        <SiCodeforces size={30} className="text-blue-600 hover:text-blue-400" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/mierafmulaw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-gray-400"
                    >
                        <Image src='/linkedin-logo.png' alt="LinkedIn" width={30} height={30} className="text-white hover:text-blue-500"/>
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400 mt-8">
                <p>&copy; {new Date().getFullYear()} Mieraf Jejaw. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
