import { useState } from "react";
import Container from "./Container";
import { FaGripLines, FaCLose } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {
    const [toggle, setToggle] = useState('hidden')
    return (
        <>
            <div className={`h-screen w-screen fixed z-10 bg-[#e5e7eb] ${toggle}`}>
                <div className="text-2xl flex flex-col p-5">
                    <div className="flex justify-end mb-20">
                        <div onClick={() => setToggle('invisible')}>
                            <GrClose/>

                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <a href="#introduce" onClick={() => setToggle('invisible')}>HOME</a>
                        <a href="#about" onClick={() => setToggle('invisible')}>ABOUT</a>
                        <a href="#projects" onClick={() => setToggle('invisible')}>PROJECTS</a>
                        <a href="#contact" onClick={() => setToggle('invisible')}>CONTACT ME</a>
                    </div>
                </div>
            </div>
            <div className="h-[111px] flex items-center bg-slate-100">
                <Container className="flex justify-between w-full">
                    <h1 className="font-bold text-[0.9em] md:text-[1.1em] md:tracking-widest">
                        <a href="">JIMUEL MARC GENSAYA</a>
                    </h1>
                    <div className="visible md:hidden" onClick={() => setToggle('visible')}>
                        <FaGripLines />
                    </div>
                    <div className="font-light hidden md:flex gap-10 text-[0.9em]">
                        <NavbarLinks href="#introduce">HOME</NavbarLinks>
                        <NavbarLinks href="#about">ABOUT</NavbarLinks>
                        <NavbarLinks href="#projects">PROJECTS</NavbarLinks>
                        <NavbarLinks href="#contact">CONTACT ME</NavbarLinks>
                    </div>
                </Container>
            </div>
        </>
    );
}
function NavbarLinks({ children, href }) {
    return (
        <a href={href} className="hover:underline hover:underline-offset-8">{children}</a>
    )
}

export default Navbar;