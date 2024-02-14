import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function NavBar() {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Home");

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 576);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="bg-orange-base w-full h-seventy flex items-center justify-start p-5">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2">
                        <h1 className="text-blue-base text-2xl font-bold xxl:ml-36">Carros top</h1>
                    </div>
                    <div className="w-1/2">
                        {isSmallScreen ? (
                            <div className="flex items-center justify-end cursor-pointer" onClick={toggleMenu}>
                                <div className="space-y-2">
                                    <div className="w-8 h-0.5 bg-blue-base"></div>
                                    <div className="w-8 h-0.5 bg-blue-base"></div>
                                    <div className="w-8 h-0.5 bg-blue-base"></div>
                                </div>
                                {isMenuOpen && (
                                    <ul className="absolute top-0 mt-seventy right-0 bg-orange-base max-h-20 w-full p-2">
                                        <Link href={"/"}>
                                            <li className={`text-lg font-bold cursor-pointer mb-2 ${selectedOption === "Home" ? "text-blue-base font-bold" : "text-custom-blue-base font-normal"}`} onClick={() => handleOptionClick("Home")}>Home</li>
                                        </Link>
                                        <Link href={"/"}>
                                            <li className={`text-lg font-bold cursor-pointer ${selectedOption === "Catálogo" ? "text-blue-base font-bold" : "text-custom-blue-base font-normal"}`} onClick={() => handleOptionClick("Catálogo")}>Catálago</li>
                                        </Link>
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <ul className="flex items-center justify-evenly">
                                <Link href={"/"}>
                                    <li className={`text-lg font-bold cursor-pointer ${selectedOption === "Home" ? "text-blue-base font-bold" : "text-custom-blue-base font-normal"}`} onClick={() => handleOptionClick("Home")}>Home</li>
                                </Link>
                                <Link href={"/"}>
                                    <li className={`text-lg font-bold cursor-pointer ${selectedOption === "Catálogo" ? "text-blue-base font-bold" : "text-custom-blue-base font-normal"}`} onClick={() => handleOptionClick("Catálogo")}>Catálago</li>
                                </Link>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;