import isEmpty from "is-empty";
import Swal from 'sweetalert2'

import { getUsers , getPost } from "./UserServices";

class UserController {
  static getAllUsers = async (setUsers,setLoading) => {
    try {
      setLoading(true);
      const response = await getUsers();
      if (!isEmpty(response)) {
        setTimeout(() => {
          setUsers(response);
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
        Swal.fire({
            icon: "error",
            showConfirmButton: false,
            title: "Oops... no se pudo obtener data",
            text: `${error}`,
          });
    }
  };
}

export default UserController;
