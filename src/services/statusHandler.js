import { AxiosError } from "axios";

const statusHandler = (err) => {
  if (err.response) {
    switch (err.response.status) {
      case 401: {
        // handle your unauthorized error here
        break;
      }
      default: {
      }
    }
  }
};

export default statusHandler;
