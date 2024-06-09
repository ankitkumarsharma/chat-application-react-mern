const Input = ({ isLabel, name, type, onChange }) => {
    return (
        <div className="mb-4">
            {isLabel && <label htmlFor="" className="label">
                <span className="text-gray-600">{name}</span>
            </label>}
            
            <input
                type={type} placeholder={`Enter ${name}`}
                onChange={onChange}
                className="p-3 rounded w-full mt-1 h-9" />
        </div>
    )
}

export default Input;