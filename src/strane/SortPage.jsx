import Naocare from "../komponente/Naocare";
import NavMenu from "../komponente/NavMenu";
import { useState } from 'react'


function SortPage() {

    const [naocare, setNaocare] = useState([
        { id: 1, model: "N. BOSS 0944/S 807 51 9O*", pol: "Ženski", cena: '28500.00', slika: 'https://diopta.rs/wp-content/uploads/2021/12/BOSS0944S_8079O_P00-600x293.jpg' },
        { id: 2, model: "N. CH 0029/S LKS 60 GB", pol: "Ženski", cena: '26400.00', slika: 'https://diopta.rs/wp-content/uploads/2022/05/CH-0029_S_RHL9O_P00-600x269.jpg' },
        { id: 3, model: "N. CH 0001/S 086 55 HA", pol: "Ženski", cena: '37600.00', slika: 'https://diopta.rs/wp-content/uploads/2022/05/CH-0001_S_086HA_P00-600x290.jpg' }
    ]);

    function sortiraj() {
        naocare.sort((a, b) => (a.cena > b.cena) ? 1 : -1)
        const sort_array = [...naocare];
        setNaocare(sort_array);
    }

    return (
        <div>

            <NavMenu />

            <button onClick={sortiraj} className="btn btn-primary mt-3 btn-lg">SORT</button>

            <Naocare naocare={naocare} />

        </div>
    )
}

export default SortPage;