const Button = ({ label = 'Dowload'}) => {
    return <button onClick={() => alert("A label desse botão é 'Dowload'") }>{label}</button>
}

export default Button