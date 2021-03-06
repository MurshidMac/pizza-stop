import React from 'react';
import CatalogButton from './CatalogButton';
import CartSummartyItem from './CartSummaryItem';

export default function CartSummary(props) {
  const catalog = () => {
    props.setView('catalog', {});
  };
  const checkout = () => {
    props.setView('checkout', {});
  };
  const reducer = (acc, cartItem) => { return acc + cartItem.price * cartItem.quantity; };
  let totalPrice = props.cartItems.reduce(reducer, 0);
  totalPrice = '$' + (totalPrice / 100).toFixed(0);
  if (!props.cartItems.length) {
    return <>
      <div className="text-center">
        <div className="h1 m-4">
          You have no items in your cart < i className="far fa-frown" ></i >
        </div>
        <div className="h3 m-4 pointer" onClick={catalog}>
          <u>
            Go back to the catalog to add items to your cart
          </u>
        </div>
      </div>
      <div className="footer d-flex align-items-center justify-content-between px-2">
        <CatalogButton light={true} catalog={catalog} />
        <h3 className='total-size centering align-text-bottom mb-0 mobile-small'>Cart Total: {totalPrice}</h3>
        <button className='btn btn-info' disabled onClick={checkout}>Checkout</button>
      </div>
    </>;
  }

  const cartItemElements = props.cartItems.map((cartItem, index) => {
    return <CartSummartyItem key={index} remove={props.remove} add={props.add} isSubmitting={props.isSubmitting} reduceQuantity={props.reduceQuantity} item={cartItem} />;
  });

  return (
    <>
      <div>
        <div className="container margin-spacer">
          {cartItemElements}
          <div className="small-spacer mb-0 pb-0" />
          <div className='spacer fixed-bottom' />
        </div>
        <div className="footer d-flex align-items-center justify-content-between px-2">
          <CatalogButton light={true} catalog={catalog} />
          <h3 className='total-size centering align-text-bottom mb-0 mobile-small'>Cart Total: {totalPrice}</h3>
          <button className='btn btn-info btn-sm' onClick={checkout}>Checkout</button>
        </div>
      </div>
    </>
  );
}
