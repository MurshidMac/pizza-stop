import React from 'react';

export default function Header({ name, cartItemCount, setView }) {
  if (!cartItemCount) {
    cartItemCount = 0;
  }

  const viewSet = () => {
    setView('cart', {});
  };

  return (
    <div className='text-center header'>
      <h2 className='mr-auto ml-3 mobile-size'> {name} <i className="fas fa-snowboarding fa-fw"></i></h2>
      <div onClick={viewSet}
        className="header-size mx-2 badge badge-secondary pointer">{cartItemCount}</div>
      <i onClick={viewSet} className='fas fa-shopping-cart fa-fw fa-2x mr-1 pointer'></i>
    </div>
  );
}
