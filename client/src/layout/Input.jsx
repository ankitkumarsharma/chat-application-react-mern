const Input = ({ isLabel, name = "something", type, onChange, radioList = [], isRadioInline = true }) => {
    const radioInput = radioList.map((item) => {
        return <div key={item} className="w-full">
            <label htmlFor={item}>
                <input id={item} type={type} placeholder={`Enter ${item}`} name={name} value={item} />
                <span className="ml-2">{item}</span>
            </label>
        </div>
    });

    return (
        <div className="mb-4">
            {isLabel && <label htmlFor="" className="label">
                <span className="text-gray-600">{name}</span>
            </label>}
            {type !== "radio" &&
                <input
                    type={type} placeholder={`Enter ${name}`}
                    onChange={onChange}
                    className="p-5 rounded w-full mt-1 h-9 rounded-full" />
            }
            {type === "radio" &&
                <div className={`flex ${!isRadioInline ? 'flex-col' : ''}`}>
                    {radioInput}
                </div>
            }
        </div>
    )
}

export default Input;