// SellerList.js
import React from 'react';

const SellerList = ({ sellers, setSelectedSeller, handleDelete }) => {
  return (
    <div className="seller-list">
      <h2>Sellers</h2>
      <ul>
        {sellers.map((seller) => (
          <li key={seller.id} onClick={() => setSelectedSeller(seller)}>
            {seller.name} - <button onClick={() => handleDelete(seller.id, 'sellers')}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerList;
