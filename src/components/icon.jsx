const Icon = ({link}) => {
    return (
        <div className="icon basis-[14%] md:basis-[11%] mb-10 h-[30px] md:h-[40px]">
            <img src={link} className="h-full mr-auto" alt="" />
        </div>
    );
}

export default Icon;