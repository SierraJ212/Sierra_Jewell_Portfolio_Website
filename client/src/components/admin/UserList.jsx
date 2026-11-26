import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../api";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    request("/users")
      .then((data) => setUsers(Array.isArray(data) ? data : data.data))
      .catch((e) => setError(e.message));
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Delete this user?")) return;
    try {
      await request(`/users/${id}`, { method: "DELETE" });
      setUsers(users.filter((u) => u.id !== id));
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div>
      <h2>Manage Users</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Link to="/admin/users/new">Add User</Link>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.firstname} {u.lastname} ({u.email}){" "}
            <Link to={`/admin/users/${u.id}/edit`}>Edit</Link>{" "}
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/admin">Back to Dashboard</Link>
    </div>
  );
}