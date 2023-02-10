function Naocare(props) {

    return (
        <div className="naocare-div">
            {props.naocare.map(n => {
                return (
                    <div className="naocare" key={n.id}>
                        <h1>{n.model}</h1>
                        <img src={n.slika} alt="naocareslika" />
                        <h4>{n.pol}</h4>
                        <h2>{n.cena} RSD</h2>
                        <button type="button" className="btn btn-danger btn-lg" onClick={() => props.obrisi(n.id)}>Obriši</button>
                    </div>
                );
            })}
        </div>
    )
}

export default Naocare;