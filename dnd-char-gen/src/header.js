import React from "react";
import './App.css';
import dndheader from './dnd.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div classname="App">
            <div classname="App-header">
                <h1>ONESHOT</h1>
                <div class="col-sm text-center">
                    <h6>A CHARACTER GENERATOR FOR</h6>
                </div>
                <div>
                    <img class="img-fluid header-img" src={dndheader} alt="dnd-logo" />
                </div>
                <div class="col-sm text-center">
                    <Button variant="primary" size="lg" onClick="doSomething()">REROLL</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;

// export default class PageHeader extends React.Component {
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <div class="col">
//                         <h1>ONESHOT</h1>
//                         <div class="col-sm text-center">
//                             <h6>A CHARACTER GENERATOR FOR</h6>
//                         </div>
//                         <div>
//                             <img class="img-fluid header-img" src={dndheader} alt="dnd-logo" />
//                         </div>
//                         <div class="col-sm text-center">
//                             <Button variant="primary" size="lg" onClick="doSomething()">REROLL</Button>
//                         </div>
//                     </div>
//                 </header>
//             </div>  
//         );
//     }
// }