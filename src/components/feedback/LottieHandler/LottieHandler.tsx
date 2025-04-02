import Lottie from "lottie-react";
import notFound from "@assets/lottieFiles/notFound.json";
import empty from "@assets/lottieFiles/empty.json";
import loading from "@assets/lottieFiles/loading.json";
import error from "@assets/lottieFiles/error.json";
import success from "@assets/lottieFiles/success.json";

const lottieFilesMap = {
  notFound,
  empty,
  loading,
  error,
  success,
};

type LottieHandlerProps = {
  type: keyof typeof lottieFilesMap;
  message?: string;
  className?: string;
};

const LottieHandler = ({ type, message, className }: LottieHandlerProps) => {
  const lottie = lottieFilesMap[type];

  const messageClasses =
    type === "error" ? "text-red-500 text-lg mt-4" : "text-lg mt-8";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <Lottie animationData={lottie} style={{ width: "400px" }} />
      {message && <h3 className={messageClasses}>{message}</h3>}
    </div>
  );
};

export default LottieHandler;
