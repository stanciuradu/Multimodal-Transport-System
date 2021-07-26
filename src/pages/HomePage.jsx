// aceasta componenta va fi de tipul class deaorece vreau sa preiau doua props-uri din JSON, deci va trebui facut un request asincron
// ->lifecycle methods
import React, { Component } from 'react';
import MenuList from '../components/MenuList';
import items from '../utils/items.json';
import '../pages/HomePage.scss';

export class HomePage extends Component {
    constructor(){
        super();
        this.state={
            // initil array-ul este gol pana ce datele vin de la back-end
            items:[]
        };
    }
    // facem request catre back-end prentru preluarea de date o singura data cu metoda componentDidMount
    componentDidMount() {
        this.setState({ items: items });
    }
    render() {
        console.log(this.props);
        return (
            <div className='homepage'>
                {/* pasam array-ul din state ca props catre componenta MenuList pentru a se mapa prin el */}
                <MenuList items={this.state.items} />
            </div>
        )
    }
}

export default HomePage;