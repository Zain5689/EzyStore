import { LottieHandler } from "@components/feedback";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <LottieHandler type="notFound" />
      </div>
      <Link
        to="/"
        replace={true}
        className="text-orange-500 hover:text-orange-600 mt-4 text-lg font-medium"
      >
        How about going back to safety?
      </Link>
    </div>
  );
};

export default Error;
