import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../../api";

const emptyForm = { firstname: "", lastname: "", email: "", password: "" };

export default function UserForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    request(`/users/${id}`)
      .then((data) => {
        const u = data.data || data;
        setForm({
          firstname: u.firstname || "",
          lastname: u.lastname || "",
          email: u.email || "",
          password: "",
        });
      })
      .catch((e) => setError(e.message));
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = { ...form };
    if (id && !payload.password) delete payload.password;
    if (!id) payload.created = new Date().toISOString();
    try {
      await request(id ? `/users/${id}` : "/users", {
        method: id ? "PUT" : "POST",
        body: JSON.stringify(payload),
      });
      navigate("/admin/users");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit" : "Add"} User</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>First Name</label>
        <input name="firstname" value={form.firstname} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name</label>
        <input name="lastname" value={form.lastname} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password {id && "(leave blank to keep current)"}</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required={!id}
        />
      </div>
      <button type="submit">Save</button>{" "}
      <button type="button" onClick={() => navigate("/admin/users")}>Cancel</button>
    </form>
  );
}