import Image from "next/image";

interface NavBarProps {
    selected: string;
    handleSelected: (title: string) => void;
    navTitles: { title: string; handleScroll: () => void }[];
}

const NavBar = ({ selected, handleSelected, navTitles }: NavBarProps) => {
    return (
        <header className="fixed top-0 left-0 w-full h-16 bg-background py-2 px-16 shadow-lg z-10">
            <nav className="flex justify-between items-center">
                {/* Logo */}
                <Image src="/logo.png" alt="logo" width={50} height={50} />

                {/* Navigation items */}
                <ul className="flex space-x-10">
                    {navTitles.map((nav, index) => (
                        <li
                            key={index}
                            className={`${selected === nav.title ? "text-navbarText" : "text-white"} hover:cursor-pointer hover:text-navbarText transition duration-300`}
                            onClick={() => {
                                handleSelected(nav.title);
                                nav.handleScroll();
                            }}
                        >
                            {nav.title}
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <div className="border border-navbarText rounded transition duration-300 hover:bg-navbarText">
                    <button className="text-white px-4 py-2">Resume</button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
