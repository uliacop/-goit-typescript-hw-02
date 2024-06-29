import { useEffect, FC } from "react";
import toast from "react-hot-toast";

const ErrorMessage: FC = () => {
  useEffect(() => {
    toast.error("Unfortunately! It doesn't work.");
  }, []);

  return null;
};

export default ErrorMessage;
