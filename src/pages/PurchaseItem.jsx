import React, { useEffect, useState } from 'react';

const items = [
	{ itemid: '#1', item_name: 'Apple', item_price: 40 },
	{ itemId: '#2', item_name: 'Banana', item_price: 20 },
	{ itemId: '#3', item_name: 'Berry', item_price: 5 },
	{ itemId: '#4', item_name: 'Coffee', item_price: 10 },
	{ itemId: '#5', item_name: 'Milk', item_price: 2.5 },
];
function PurchaseItem() {
	const [newItem, setNewItem] = useState([]);

	const handleAddItems = (item) => {
		const storedUser = localStorage.getItem('user');

		if (!storedUser) return;

		const user = JSON.parse(storedUser);

		const updatedUser = {
			...user,
			items: user.items ? [...user.items, item] : [item],
		};

		localStorage.setItem('user', JSON.stringify(updatedUser));
	};

    useEffect(()=>{
        
    },[])

	return (
		<div className="item-container">
			{items.map((item) => (
				<div className="display_items">
					<h4>{item.item_name}</h4>
					<p>{item.item_price}</p>
					<button onClick={handleAddItems(item)}>Add</button>
				</div>
			))}
		</div>
	);
}

export default PurchaseItem;
