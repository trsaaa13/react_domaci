import Naocare from "../komponente/Naocare";
import NavMenu from "../komponente/NavMenu";
import { useState } from 'react'


function HomePage() {

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
        <div>
            <NavMenu />
            <Naocare naocare={naocare} obrisi={obrisiNaocare} />
        </div>
    )
}

export default HomePage;