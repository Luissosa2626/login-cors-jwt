import Table from "../components/Table";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function LogsPage() {
  const { getUsers, user } = useAuth();
  console.log(user);

  useEffect(() => {
    getUsers();

  }, []);

  return (
    <div>
      {
        <Table users={user} key={user._id} />
      }
    </div>
  );
}

export default LogsPage;
