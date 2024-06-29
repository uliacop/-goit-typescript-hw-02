import { useEffect } from "react";
import toast from "react-hot-toast";

const ErrorMessage = () => {
  useEffect(() => {
    toast.error("Unfortunately! It doesn't work.");
  }, []);

  return null;
};

export default ErrorMessage;
