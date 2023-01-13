export const Input = ({
    type,
    placeholder,
    label,
    onChange,
    value
}) => {
    return (
        <>
            <label htmlFor="">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={(event) => {
                    onChange('search', event.target.value)
                }}
                value={value || ''}
            />
        </>
    )
}
