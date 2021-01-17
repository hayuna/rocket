import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Rocket from "../pages/Rocket"

import F1 from "../img/falcon.webp"
import F2 from "../img/falcon_png.png"
import F3 from "../img/Merlin.webp"

import S1 from "../img/starship.webp"
import S2 from "../img/starship_png.png"
import S3 from "../img/sattelites.gif"


import E1 from "../img/electron.jpg"
import E2 from "../img/electron_png.png"
import E3 from "../img/electron_first.png"


const Ships = [
    {
        id: 1,
        name: "Falcon",
        text: 'Pierwsza na świecie rakieta wielokrotnego użytku!',
        text2: "Falcon 9 to dwustopniowa rakieta wielokrotnego użytku zaprojektowana i wyprodukowana przez SpaceX w celu niezawodnego i bezpiecznego transportu ludzi i ładunków na orbitę ziemską i poza nią. Wielokrotne użycie pozwala SpaceX na naprawę najdroższych części rakiety, co z kolei obniża koszt dostępu do przestrzeni kosmicznej.",
        prop: [
            "Wysokość: 70m",
            "Średnica: 3.7m",
            "Waga: 594t",
            "Ładowność: 22.8t",
        ],
        img: [F1, F2, F3],
        text3: [
            "Silnik Merlin",
            "Merlin to rodzina silników rakietowych opracowanych przez SpaceX do użytku w pojazdach startowych Falcon 1, Falcon 9 i Falcon Heavy.",
            "Paliwo: LOX (ciekły tlen)",
            "Ciąg: 845 kN",
        ],
        
    },

    {
        id: 2,
        name: "Starship",
        text: 'Zabierze Cię w podróż na Księżyc, Marsa, a może i jeszcze dalej...',
        text2: "Starship to nowa rakieta wielokrotnego użytku, nad rozwojem której pracuje obecnie SpaceX. Ma się ona składać z dwóch stopni. Pierwszy z nich, booster o nazwie Super Heavy, po separacji ma wracać na ląd i lądować, tak jak pierwsze stopnie rakiet z rodziny Falcon.",
        prop: [
            "Wysokość: 122m",
            "Średnica: 9m",
            "Waga: 3500t",
            "Ładowność: 100t / 1000m3",
        ],
        img: [S1, S2, S3],
        text3: [
            "Ładowność",
            "Starship został zaprojektowany tak, aby dostarczać satelity dalej i przy niższym koszcie niż obecne pojazdy Falcon. Rakieta będzie także największą rakietą na świecie pod względem możliwości załadunku.",
            "",
            "",
        ]
    },

    {
        id: 3,
        name: "Electron",
        text: 'Dwustopniowa rakieta firmy Rocket Lab, opracowana do wynoszenia małych satelit.',
        text2: "Rakieta Electron to jedna z najmniejszych rakiet nośnych. Jest zdolna do wynoszenia małych ładunków (150-225 kg) na niską orbitę wokołoziemską (LEO). Koszt wyniesienia to koło 6 mln dolarów. Jest to pierwsza na świecie rakieta, która używa cyklu pracy z użyciem pomp elektrycznych.",
        prop: [
            "Wysokość: 16m",
            "Średnica: 1.2m",
            "Waga: 10,5t",
            "Ładowność: 225kg",
        ],
        img: [E1, E2, E3],
        text3: [
            "Silnik Rutherforda",
            "Pierwszy stopień rakiety jest zasilany dziewięcioma silnikami Rutherforda",
            "Czas pracy: 303s",
            "Ciąg: 192 kN",
        ],
    },
]


const Page = () => {
    return ( 
        <Switch>
            <Route path="/" exact>
                <Rocket data={Ships[0]}/>
            </Route>

            <Route path="/starship">
                <Rocket data={Ships[1]}/>
            </Route>

            <Route path="/electron" exact>
                <Rocket data={Ships[2]}/>
            </Route>
        </Switch>
     );
}
 
 
export default Page;