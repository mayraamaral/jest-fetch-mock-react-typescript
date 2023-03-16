import React, { useEffect, useState } from "react";
import { UserFromApi } from "./utils/interfaces";

function App() {
  const [users, setUsers] = useState<UserFromApi[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <table style={{ border: "solid 1px black", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th style={{ border: "solid 1px black" }}>Nome</th>
            <th style={{ border: "solid 1px black" }}>E-mail</th>
            <th style={{ border: "solid 1px black" }}>Username</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: UserFromApi) => {
            return (
              <tr key={user.id} style={{ textAlign: "center" }}>
                <td style={{ border: "solid 1px black", padding: "0px 10px" }}>
                  {user.name}
                </td>
                <td style={{ border: "solid 1px black", padding: "0px 10px" }}>
                  {user.email.toLowerCase()}
                </td>
                <td style={{ border: "solid 1px black", padding: "0px 10px" }}>
                  {user.username}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
