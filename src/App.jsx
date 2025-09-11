import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RootLayout from "./pages/RootLayout";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Routers>
  );
}

export default App;
