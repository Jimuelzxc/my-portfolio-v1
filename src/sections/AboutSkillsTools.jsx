import Container from "../components/Container";
import Header from "../components/Header";
import Icons from "../components/Icons";
import { IconsData } from "../data"

const AboutSkillsTools = () => {
    return (
        <div className="min-h-screen flex items-center" id="about">
            <Container className="w-full flex flex-col gap-[300px]">
                <div>
                    <Header className="mb-5">ABOUT ME</Header>
                    <p className="w-full md:w-[700px] text-white leading-7 font-light text-[0.9em] md:text-[1em]">I am a self-taught Full Stack Developer and Graphic Designer.
                        I love creating websites, editing headers and posters and I also love creating videos. In my free time, I read books, learn new things and watch content creators that inspire me.</p>
                </div>
                <div>
                    <Header className="mb-5">SKILLS & TOOLS</Header>
                    <hr className="opacity-20" />
                    <div className="flex justify-between gap-3 flex-wrap md:flex-nowrap">
                        <Icons skills={IconsData.tech} name="TECH" />
                        <Icons skills={IconsData.design} name="DESIGN" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default AboutSkillsTools;