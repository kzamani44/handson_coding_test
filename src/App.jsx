import CreateUser from './pages/CreateUser';
import PurchaseItem from './pages/PurchaseItem';
import './App.css';

function App() {
	const raw = JSON.parse(localStorage.getItem('user')) || {};

	const storedUsers = Object.keys(raw)
		.filter((key) => !isNaN(key)) // only keep numeric keys
		.map((key) => raw[key]);

    if(!storedUsers){
      return
    }

	return (
		<div className="main-display">
			<div>
				<h2>Customer & Items Counter</h2>
				<CreateUser />
				<PurchaseItem />
			</div>

			<div className="result-container">
				<h2>Result</h2>

				<div>
					<div>
						<h2>Users</h2>

						<table>
							<thead>
								<tr>
									<th>S/N</th>
									<th>Name</th>
									<th>Email</th>
								</tr>
							</thead>
							<tbody>
								{storedUsers.map((user, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{user.full_name}</td>
										<td>{user.email}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div>
						<h2>Items</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
