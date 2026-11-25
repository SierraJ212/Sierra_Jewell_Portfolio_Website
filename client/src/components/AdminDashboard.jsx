import { Link } from "react-router-dom";

export default function AdminDashboard() {
    return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/admin/projects">Projects</Link></li>
        <li><Link to="/admin/services">Services</Link></li>
        <li><Link to="/admin/references">References</Link></li>
      </ul>
    </div>
  );
}