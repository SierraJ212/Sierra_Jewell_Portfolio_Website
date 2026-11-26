import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../api";

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    request("/services")
      .then((data) => setServices(Array.isArray(data) ? data : data.data))
      .catch((e) => setError(e.message));
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Delete this service?")) return;
    try {
      await request(`/services/${id}`, { method: "DELETE" });
      setServices(services.filter((s) => s.id !== id));
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div>
      <h2>Manage Services</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Link to="/admin/services/new">Add Service</Link>
      <ul>
        {services.map((s) => (
          <li key={s.id}>
            {s.title}{" "}
            <Link to={`/admin/services/${s.id}/edit`}>Edit</Link>{" "}
            <button onClick={() => handleDelete(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/admin">Back to Dashboard</Link>
    </div>
  );
}