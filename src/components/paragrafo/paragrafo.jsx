const Paragrafo = ({label, color='orangered',textTransform='uppercase'}) =>{

    return <p style={{color, textTransform}}>{label}</p>
}

export default Paragrafo