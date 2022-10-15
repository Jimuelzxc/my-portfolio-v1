import Container from "../components/Container";
import Header from "../components/Header"
import Tab from "../components/Tab";

import { ProjectsData } from "../data";
import { useState } from "react";

const Projects = () => {
    const [project, setProject] = useState("design")
    const [toggle, setToggle] = useState(1)
    function toggleTab(handle, index) {
        setProject(handle)
        setToggle(index)
    }
    return (
        <div className="min-h-screen" id="projects">
            <Container className="py-20">
                <Header>PROJECTS</Header>
                <div className="text-white flex gap-5 mb-5 mt-2">
                    <Tab toggle={toggle} toggleTab={toggleTab} name="tech" index={2} />
                    <Tab toggle={toggle} toggleTab={toggleTab} name="design" index={1} />
                </div>
                <hr className="opacity-20"/>
                <div className="flex flex-wrap justify-between py-10">
                    {
                        ProjectsData[project].map((value, index) => {
                            return (
                                <a key={index} href={value.link} className="basis-[99%] md:basis-[24%] h-[312px] flex items-center bg-slate-300 bg-center bg-cover mb-5 hover:grayscale" style={{ backgroundImage: `url(${value.thumbnail})` }}></a>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    );
}

export default Projects;