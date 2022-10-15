const Header = ({ children, className }) => {
    return (
        <>
            <h1 className={`text-white text-2xl md:text-3xl font-black ${className}`}>{children}</h1>
        </>
    );
}

export default Header;