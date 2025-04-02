import { Side, SocialPart } from "@components/common";
import { Input } from "@components/Form";
import useRegister from "@hooks/useRegister";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { loading, formErrors, submitForm, register, handleSubmit } =
    useRegister();
  return (
    <div>
      {" "}
      <div className="min-h-screen flex justify-center bg-gray-50 p-4">
        <div className="w-full max-w-9xl grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-[36px] font-bold mb-2 flex items-center gap-2">
              Forgot Password
            </h2>
            <p className="text-gray-600 mb-8 text-[16px]">
              Please enter your email address, and we will verify your interest.
              We will send you a simple link to reset your password.
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
                  <Link to={"/auth/resetPassword"}> Send Link</Link>
                )}
              </button>
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
    </div>
  );
};

export default ForgotPassword;
