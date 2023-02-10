import { useState } from 'react'


function Naocare() {

    const [naocare, setNaocare] = useState([
        { id: 1, model: "N. BOSS 0944/S 807 51 9O*", pol: "Ženski", cena: '26,200.00', slika: 'https://diopta.rs/wp-content/uploads/2021/12/BOSS0944S_8079O_P00-600x293.jpg' },
        { id: 2, model: "N. CH 0029/S LKS 60 GB", pol: "Ženski", cena: '26,400.00', slika: 'https://diopta.rs/wp-content/uploads/2022/05/CH-0029_S_RHL9O_P00-600x269.jpg' },
        { id: 3, model: "N. CH 0001/S 086 55 HA", pol: "Ženski", cena: '37,600.00', slika: 'https://diopta.rs/wp-content/uploads/2022/05/CH-0001_S_086HA_P00-600x290.jpg' }
    ]);


    function obrisiNaocare(id) {
        let niz = naocare.filter((n) => { return n.id !== id });
        setNaocare(niz)
    }


    return (
        <div className="naocare-div">

            {naocare.map(n => {
                return (
                    <div className="naocare" key={n.id}>
                        <h1>{n.model}</h1>
                        <img src={n.slika} alt="naocareslika" />
                        <h4>{n.pol}</h4>
                        <h2>{n.cena} RSD</h2>
                        <button type="button" onClick={() => obrisiNaocare(n.id)}>Obriši</button>
                    </div>
                );
            })}
        </div>
    )
}

export default Naocare;