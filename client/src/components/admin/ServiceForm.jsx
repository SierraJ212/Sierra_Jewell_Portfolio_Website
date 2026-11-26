import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../../api";

const emptyForm = { title: "", description: "" };

export default function ServiceForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    request(`/services/${id}`)
      .then((data) => {
        const s = data.data || data;
        setForm({ title: s.title || "", description: s.description || "" });
      })
      .catch((e) => setError(e.message));
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await request(id ? `/services/${id}` : "/services", {
        method: id ? "PUT" : "POST",
        body: JSON.stringify(form),
      });
      navigate("/admin/services");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit" : "Add"} Service</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Title</label>
        <input name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>{" "}
      <button type="button" onClick={() => navigate("/admin/services")}>Cancel</button>
    </form>
  );
}