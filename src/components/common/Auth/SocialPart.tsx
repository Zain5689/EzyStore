import useLogin from "@hooks/useLogin";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface SocialPartProps {
  Sign: string;
  link: string;
  account: string;
  providers?: string[]; // Default: ["Google", "Facebook"]
}

const SocialPart: React.FC<SocialPartProps> = ({
  Sign,
  link,
  account,
  providers = ["Google", "Facebook"],
}) => {
  const navigate = useNavigate();
  const { accessToken } = useLogin();
  const [loadingProvider] = useState<string | null>(null);

  useEffect(() => {
    if (accessToken) {
      // navigate("/");
    }
  }, [accessToken, navigate]);

  const renderButton = (provider: string) => {
    if (provider === "Google") {
      return (
        <div id="googleSignInButton" className="flex justify-center mb-4">
          {loadingProvider === "Google" ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#CC7700]"></span>
              <span className="text-gray-600">Connecting to Google...</span>
            </div>
          ) : (
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="Sign in with Google"
              onClick={() => console.log("Google login not yet implemented")}
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>
          )}
        </div>
      );
    }

    if (provider === "Facebook") {
      return (
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          aria-label="Sign in with Facebook"
          onClick={() => console.log("Facebook login not yet implemented")}
        >
          <img
            src="https://www.facebook.com/favicon.ico"
            alt="Facebook"
            className="w-5 h-5"
          />
          Sign in with Facebook
        </button>
      );
    }

    return null;
  };

  return (
    <>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-50 text-gray-500">Or</span>
        </div>
      </div>

      {providers.map((provider) => (
        <div key={provider}>{renderButton(provider)}</div>
      ))}

      <p className="text-center text-gray-600 text-sm mt-6">
        {account} you have an account?
        <Link to={link} className="text-[#CC7700] hover:text-[#CC7700]">
          {Sign}
        </Link>
      </p>
    </>
  );
};

export default SocialPart;
