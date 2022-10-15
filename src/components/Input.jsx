const Input = ({title, holder,name, onChange}) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <span>{title}</span>
            <input type="text" name={name} placeholder={holder} className="bg-transparent border border-[#B2B0B0] h-[50px] px-5" onChange={onChange}/>
        </div>
    );
}

export default Input;