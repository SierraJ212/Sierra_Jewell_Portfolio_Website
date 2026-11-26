import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../../api";

const emptyForm = { title: "", completion: "", description: "", image: "" };

export default function ProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    request(`/projects/${id}`)
      .then((data) => {
        const p = data.data || data;
        setForm({
          title: p.title || "",
          completion: p.completion ? p.completion.slice(0, 10) : "",
          description: p.description || "",
          image: p.image || "",
        });
      })
      .catch((e) => setError(e.message));
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await request(id ? `/projects/${id}` : "/projects", {
        method: id ? "PUT" : "POST",
        body: JSON.stringify(form),
      });
      navigate("/admin/projects");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit" : "Add"} Project</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Title</label>
        <input name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Completion Date</label>
        <input type="date" name="completion" value={form.completion} onChange={handleChange} />
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} />
      </div>
      <div>
        <label>Image (URL or filename)</label>
        <input name="image" value={form.image} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>{" "}
      <button type="button" onClick={() => navigate("/admin/projects")}>Cancel</button>
    </form>
  );
}