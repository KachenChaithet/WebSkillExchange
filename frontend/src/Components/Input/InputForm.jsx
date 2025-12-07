const InputForm = ({ subject, title, placeholder, rule }) => {
    return (
        <div className="">
            <h1 className="text-md font-semibold border-b border-neutral-200 pb-2 mb-2">{subject}</h1>

            <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="" className="text-md font-sans">{title}</label>
                <input type="text" placeholder={placeholder} className="border border-neutral-200 rounded-md px-3 py-1 outline-none" />
            </div>
            <p className="text-neutral-500 text-sm">{rule}</p>

        </div>
    )
}
export default InputForm