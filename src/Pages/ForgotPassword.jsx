import { use, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const ForgotPassword = () => {
  const { forgetPass } = use(AuthContext); 
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    forgetPass(email);
  };

  return (
    <div className="max-w-sm mx-auto my-10 p-6 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;