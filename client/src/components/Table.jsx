// import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";


function Table({users}) {
  const { getUsers, user } = useAuth();

    return (
        <table className="border-2 border-cyan-200 w-6/12">
        <thead className="text-white">
          <tr>
            <th className="py-3 bg-cyan-800">Login usuario</th>
            <th className="py-3 bg-cyan-800">ID usuario</th>
            <th className="py-3 bg-cyan-800">Email usuario</th>
            <th className="py-3  bg-cyan-800">Inicio de sesion</th>
          </tr>
        </thead>
        <tbody className="text-cyan-900 text-center">
          <tr>
            <td>{user.username}</td>
            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{new Date(user.updatedAt).toLocaleDateString()}</td>
          </tr>
        </tbody>
      </table>
    )
}

export default Table