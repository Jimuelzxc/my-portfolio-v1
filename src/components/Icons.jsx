import Icon from "./icon"
const Icons = ({ skills, name }) => {
    return (
        <div id="tech" className="w-full md:w-[50%] py-5 md:py-10">
            <span className="uppercase text-white font-bold md:font-black">{name}</span>
            <div className="flex flex-wrap mt-3 gap-0 md:gap-1">
                {
                    skills.map((value, index) => <Icon key={index} link={value} />)
                }
            </div>
        </div>
    );
}

export default Icons;