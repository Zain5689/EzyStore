import React, { Suspense } from "react";
import { Input } from "@components/Form";
import { Side } from "@components/common";
import useRegister from "@hooks/useRegister";
const SocialPart = React.lazy(
  () => import("@components/common/Auth/SocialPart")
);

const Register = () => {
  const {
    loading,
    accessToken,
    formErrors,
    emailAvailabilityStatus,
    submitForm,
    register,
    handleSubmit,
    emailOnBlurHandler,
  } = useRegister();

  if (accessToken) {
    // return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <div className="min-h-screen flex justify-center bg-gray-50 p-4">
        <div className="w-full max-w-8xl grid md:grid-cols-2 gap-8 items-center">
          <Side sign={"Sign In"} link={"/auth/login"} />
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-[33px] font-bold mb-2 flex items-center gap-2">
              Create your account
              <span role="img" aria-label="wave">
                👋
              </span>
            </h2>
            <p className="text-gray-600 mb-3 text-[15px]">
              Today is a new day. It's your day. You shape it.
              <br />
              Sign in to start managing your projects.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit(submitForm)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-[16px] font-medium text-gray-700 "
                >
                  User name
                </label>
                <Input
                  label="Your Name"
                  name="name"
                  register={register}
                  error={formErrors.name?.message}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[16px] font-medium text-gray-700 "
                >
                  Email
                </label>
                <Input
                  label="Email Address"
                  name="email"
                  register={register}
                  onBlur={emailOnBlurHandler}
                  error={
                    formErrors.email?.message
                      ? formErrors.email?.message
                      : emailAvailabilityStatus === "notAvailable"
                      ? "This email is already in use."
                      : emailAvailabilityStatus === "failed"
                      ? "Error from the server."
                      : ""
                  }
                  formText={
                    emailAvailabilityStatus === "checking"
                      ? "We're currently checking the availability of this email address. Please wait a moment."
                      : ""
                  }
                  success={
                    emailAvailabilityStatus === "available"
                      ? "This email is available for use."
                      : ""
                  }
                  disabled={emailAvailabilityStatus === "checking"}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-[16px] font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  type="password"
                  label="Password"
                  name="password"
                  register={register}
                  error={formErrors.password?.message}
                />
                <button
                  type="button"
                  className="text-[#CC7700] text-[16px]  cursor-pointer flex gap-3 items-center "
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-[#CC7700] rounded-sm   "
                    required
                  />
                  I agree to the terms and conditions
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-[#CC7700] text-white py-2 rounded-lg hover:bg-orange-400 transition-colors cursor-pointer"
                disabled={
                  emailAvailabilityStatus === "checking" ||
                  loading === "pending"
                }
              >
                {loading === "pending" ? (
                  <>
                    <span className="spinner-border spinner-border-sm"></span>
                    Loading...
                  </>
                ) : (
                  "Sign up"
                )}
              </button>
              <Suspense fallback={<div>Loading social login...</div>}>
                <SocialPart
                  Sign={"sign in"}
                  link={"/auth/login"}
                  account={""}
                />
              </Suspense>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
