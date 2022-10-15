import Container from "../components/Container";
import SocialLink from "../components/SocialLink";
import { FaGithub, FaBehanceSquare, FaFacebook, FaInstagram } from 'react-icons/fa'
const Introduction = () => {
    return (
        <div id="introduce">
            <Container className="h-screen  flex flex-col justify-center gap-20">
                <div className="text-white" name="introduction">
                    <h1 className="font-black text-[2.5em] md:text-[5em] ">
                        HI, MY <br /> NAME IS <span className="text-primary-color">JIMUEL.</span>
                    </h1>
                    <div className="font-light md:font-black tracking-wider text-[0.9em]">FULL-STACK DEVELOPER & GRAPHIC DESIGNER</div>
                </div>
                <div className="text-white">
                    <div className="opacity-[50%] font-light">SOCIAL</div>
                    <div className="flex gap-5 mt-3">
                        <SocialLink href="https://www.behance.net/jimuelgensaya">
                            <FaBehanceSquare />
                        </SocialLink>
                        <SocialLink href="https://github.com/Jimuelzxc" className="hover:text-primary-color">
                            <FaGithub />
                        </SocialLink>
                        <SocialLink href="#">
                            <FaFacebook />
                        </SocialLink>
                        <SocialLink href="#">
                            <FaInstagram />
                        </SocialLink>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Introduction;