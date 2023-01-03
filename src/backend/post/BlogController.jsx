import isEmpty from "is-empty";
import Swal from 'sweetalert2'

import { getPost } from "./BlogServices";

class BlogController {
  static getAllPost = async (setPost,setLoading) => {
    try {
      setLoading(true);
      const response = await getPost();
      if (!isEmpty(response)) {
        setTimeout(() => {
          setPost(response);
          setLoading(false);
        }, 3000);
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

export default BlogController;
