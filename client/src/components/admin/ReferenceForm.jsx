import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../../api";

const emptyForm = { name: "", testimonial: "", position: "", company: "" };

export default function ReferenceForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    request(`/references/${id}`)
      .then((data) => {
        const r = data.data || data;
        setForm({
          name: r.name || "",
          testimonial: r.testimonial || "",
          position: r.position || "",
          company: r.company || "",
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
      await request(id ? `/references/${id}` : "/references", {
        method: id ? "PUT" : "POST",
        body: JSON.stringify(form),
      });
      navigate("/admin/references");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit" : "Add"} Reference</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Position</label>
        <input name="position" value={form.position} onChange={handleChange} />
      </div>
      <div>
        <label>Company</label>
        <input name="company" value={form.company} onChange={handleChange} />
      </div>
      <div>
        <label>Testimonial</label>
        <textarea name="testimonial" value={form.testimonial} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>{" "}
      <button type="button" onClick={() => navigate("/admin/references")}>Cancel</button>
    </form>
  );
}