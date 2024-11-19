import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import TaskPage from "./pages/TaskPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import {TaskProvider} from "./context/TaskContext";
import Navbar from "./components/Navbar";
import LogsPage from "./pages/LogsPage";
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
      <main className="container mx-auto px-10">
      <Navbar />
        <Routes>
          {/*Public Routes */}
          {/* Agregar para ver logs y otro para ver gestion de usuarios */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logs" element={<LogsPage />} />

          {/*Private Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/add-task" element={<TaskFormPage />} />
            <Route path="/tasks/:id" element={<TaskFormPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* <Route path="/logs" element={<LogsPage />} /> */}
          </Route>
        </Routes>
      </main>
      </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
