import { Side, SocialPart } from "@components/common";
import { Input } from "@components/Form";
import useRegister from "@hooks/useRegister";

const ResetPassword = () => {
  const { loading, formErrors, submitForm, register, handleSubmit } =
    useRegister();
  return (
    <div>
      <div>
        <div className="min-h-screen flex justify-center bg-gray-50 p-4">
          <div className="w-full max-w-9xl grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-[36px] font-bold mb-2 flex items-center gap-2">
                Reset Password
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
                <div className="mb-8">
                  <label
                    htmlFor="password"
                    className="block text-[16px] font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <Input
                    type="password"
                    label="Password"
                    name="password"
                    register={register}
                    error={formErrors.password?.message}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-[16px] font-medium text-gray-700"
                  >
                    Re-enter Password
                  </label>
                  <Input
                    type="password"
                    label="Password"
                    name="password"
                    register={register}
                    error={formErrors.password?.message}
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
                    "Save Password"
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
    </div>
  );
};

export default ResetPassword;
