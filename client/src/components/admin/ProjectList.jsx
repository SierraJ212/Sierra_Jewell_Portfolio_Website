import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../api";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    request("/projects")
      .then((data) => setProjects(Array.isArray(data) ? data : data.data))
      .catch((e) => setError(e.message));
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Delete this project?")) return;
    try {
      await request(`/projects/${id}`, { method: "DELETE" });
      setProjects(projects.filter((p) => p.id !== id));
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div>
      <h2>Manage Projects</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Link to="/admin/projects/new">Add Project</Link>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            {p.title}{" "}
            <Link to={`/admin/projects/${p.id}/edit`}>Edit</Link>{" "}
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/admin">Back to Dashboard</Link>
    </div>
  );
}