import { IUsers } from "interfaces/User";
import { useState, useEffect } from "react";
import { fetchUsers } from "services/usersService";

export function useFetchUsers(page: number, searchText: string) {
  const [users, setUsers] = useState<IUsers | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchUsers(page, searchText)
      .then((users) => {
        setUsers(users);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [page, searchText]);

  return { users, loading, error };
}
