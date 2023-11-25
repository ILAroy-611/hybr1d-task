export default function DropDown({ handleChange, dropdownList, label, value }) {
    return (
        <div className="dropdown-wrapper">
            <label>
                {label}
                <select value={value} onChange={handleChange}>
                    {dropdownList.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}
