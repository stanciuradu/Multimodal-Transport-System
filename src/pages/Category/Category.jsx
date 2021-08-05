// ->utilizez lifecycle methods, deci am nevoie de o Class Component
import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import products from '../../utils/products.json';

export class Category extends Component {
    constructor(){
        super();
        this.state={
            category:[]
        };
    }
     // in componentDidMount fac request-ul catre server pentru datele
  componentDidMount() {
    console.log(this.props);
    // In match gasim parametri rutei
    const { match } = this.props;
    const categoryName = match.params.categoryName;
    this.setState({ category: products[categoryName] });

  }
    render() {
        console.log(this.props);
        return (
            <div className='category'>
                <ProductList products={this.state.category.items} />
            </div>
        );
    }
}

export default Category