import CreateUser from "./pages/CreateUser";
import "./App.css";
import { useState} from "react";

function App() {
  const [userData, setuserData] = useState([]);

  return (
    <div className="main-display">
      <div>
        <h2>Customer & Items Counter</h2>
        <CreateUser setuserData={setuserData} />
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
                  <th>Items</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.full_name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.items.map((item, idx) => (
                        <div key={idx}>
                          {item.itemName} - ${item.itemPrice}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h2>All Items</h2>
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Customer</th>
                  <th>Item name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {userData.flatMap((user, userIndex) =>
                  user.items.map((item, itemIndex) => (
                    <tr key={`${userIndex}-${itemIndex}`}>
                      <td>{userIndex * 100 + itemIndex + 1}</td>
                      <td>{user.full_name}</td>
                      <td>{item.itemName}</td>
                      <td>${item.itemPrice}</td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;