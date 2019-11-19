import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Wicked Sales';
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    const view = { name, params };
    this.setState({ view });
  }

  render() {
    const viewState = this.state.view.name;
    if (viewState === 'catalog') {
      return (
        <div>
          <Header name={this.name} />
          <ProductList viewSetter={this.setView} />
        </div>
      );
    } else if (viewState === 'details') {
      return (
        <div>
          <Header name={this.name} />
          <ProductDetails productId={this.state.view.params} viewSetter={this.setView} />
        </div>
      );
    }
  }
}
