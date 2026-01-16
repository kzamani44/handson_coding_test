import React, { useEffect, useState } from 'react';


function PurchaseItem() {
	const [itemName, setItemName] = useState('');
	const [itemPrice, setItemPrice] = useState('');


    const handleAddItems = (e) => {
        e.preventDefault();
		console.log(itemName, itemPrice);
		const itemData = { itemName, itemPrice };

		const storedItems = JSON.parse(localStorage.getItem('items')) || [];

        const updatedItems = [...storedItems, itemData];
        
		// Add item detail to localStorage
		localStorage.setItem('items', JSON.stringify(updatedItems));
    }


	return (
		<div className="item-container">
					<div className="form">
			<h3>Add New Item</h3>
			<form className="form-container">
				<div className="form-items">
					<label htmlFor="item_name">Item Name:</label>
					<input
						type="text"
						name="item_name"
						id="item_name"
						value={itemName}
                        onChange={(e)=>setItemName(e.target.value)}
					/>
				</div>
				<div className="form-items">
					<label htmlFor="item_price">Price:</label>
					<input
						type="text"
						name="item_price"
						id="item_price"
						value={itemPrice}
                        onChange={(e)=>setItemPrice(e.target.value)}
					/>
				</div>

				<div>
					<button type='button' onClick={handleAddItems}>Add Item</button>
				</div>
			</form>
		</div>
		</div>
	);
}

export default PurchaseItem;
