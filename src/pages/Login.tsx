import useLogin from "@hooks/useLogin";
import { Input } from "@components/Form";
import { Side, SocialPart } from "@components/common";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    error,
    loading,
    formErrors,
    searchParams,
    register,
    handleSubmit,
    submitForm,
  } = useLogin();

  return (
    <div className="min-h-screen flex justify-center bg-gray-50 p-4">
      <div className="w-full max-w-9xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Sign In Form */}
        {searchParams.get("message") === "login_required" && (
          <div className="p-4 mb-4 text-green-800 bg-green-100 border border-green-300 rounded-md">
            You need to login to view this content
          </div>
        )}

        <div className="w-full max-w-md mx-auto">
          <h2 className="text-[36px] font-bold mb-2 flex items-center gap-2">
            Welcome Back
            <span role="img" aria-label="wave">
              👋
            </span>
          </h2>
          <p className="text-gray-600 mb-8 text-[16px]">
            Today is a new day. It's your day. You shape it.
            <br />
            Sign in to start managing your projects.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
            <div>
              <label
                htmlFor="email"
                className="block text-[16px] font-medium text-gray-700 mb-1"
              >
                Email
              </label>

              <Input
                name="email"
                label="Email Address"
                register={register}
                error={formErrors.email?.message}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-[16px] font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <Input
                type="password"
                name="password"
                label="Password"
                register={register}
                error={formErrors.password?.message}
              />
              <Link
                to={"/auth/forgetPassword"}
                type="button"
                className="text-[#CC7700] text-[16px] mt-1 cursor-pointer"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#CC7700] text-white py-2 rounded-lg hover:bg-orange-400 transition-colors cursor-pointer"
            >
              {loading === "pending" ? (
                <>
                  <span className="spinner-border spinner-border-sm"></span>{" "}
                  Loading...
                </>
              ) : (
                "Sign in"
              )}
            </button>
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            <SocialPart
              Sign={"sign up"}
              link={"/auth/register"}
              account={"Don't"}
            />
          </form>
        </div>

        {/* Right Side - Logo and Sign Up */}
        <Side sign={"Sign Up"} link={"/auth/register"} />
      </div>
    </div>
  );
};

export default Login;
