import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../api";

export default function ReferenceList() {
  const [references, setReferences] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    request("/references")
      .then((data) => setReferences(Array.isArray(data) ? data : data.data))
      .catch((e) => setError(e.message));
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Delete this reference?")) return;
    try {
      await request(`/references/${id}`, { method: "DELETE" });
      setReferences(references.filter((r) => r.id !== id));
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div>
      <h2>Manage References</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Link to="/admin/references/new">Add Reference</Link>
      <ul>
        {references.map((r) => (
          <li key={r.id}>
            {r.name}{r.company ? ` (${r.company})` : ""}{" "}
            <Link to={`/admin/references/${r.id}/edit`}>Edit</Link>{" "}
            <button onClick={() => handleDelete(r.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/admin">Back to Dashboard</Link>
    </div>
  );
}