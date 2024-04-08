import toast from "react-hot-toast";

export const handleError = async (error: unknown) => {
  let message;
  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Error";
  }

  toast.error(message);
};
