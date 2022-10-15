const Container = ({ children, className }) => {
    return (
        <div className={`mx-[20px] md:mx-[240px] ${className}`}>
            {children}
        </div>
    );
}

export default Container;