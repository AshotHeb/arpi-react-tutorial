export const Input = ({
    type,
    placeholder,
    label
}) => {
    return (
        <>
            <label htmlFor="">{label}</label>
            <input type={type} placeholder={placeholder} />
        </>
    )
}