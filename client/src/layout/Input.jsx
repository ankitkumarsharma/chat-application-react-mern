const Input = ({ isLabel, label="something", name, type, onChange, radioList = [], isRadioInline = true, mb="mb-4" }) => {
    const radioInput = radioList.map((item) => {
        return <div key={item.value} className="w-full">
            <label htmlFor={item.value}>
                <input id={item.value} type={type} onChange={onChange} name={name} value={item.value} />
                <span className="ml-2">{item.label}</span>
            </label>
        </div>
    });

    return (
        <div className={`${mb} w-full`}>
            {isLabel && <label htmlFor="" className="label">
                <span className="text-gray-600">{label}</span>
            </label>}
            {type !== "radio" &&
                <input
                    type={type} placeholder={`Enter ${label}`}
                    onChange={onChange}
                    name={name}
                    className="p-5 w-full mt-1 h-9 rounded-full" />
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