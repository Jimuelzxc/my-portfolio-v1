const Tab = ({toggle, toggleTab, name, index}) => {
    return ( 
        <span className={toggle === index ? "font-black cursor-pointer uppercase" : "font-light cursor-pointer uppercase"}
            onClick={() => { toggleTab(name, index) }}>{name}</span>
    );
}

export default Tab;