import { useState, FormEvent } from "react";
import Helmet from "../components/Helment/Helment";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <section>
        <div className="px-36">
          <div className="py-10 flex flex-col items-center">
            <div className="w-[40%] flex flex-col items-center">
              <h3 className="text-center text-customcolor font-semibold text-2xl mb-5">Login</h3>
              <form onSubmit={handleSubmit} className="bg-customcolor h-full w-[120%] text-center p-7 rounded-md">
                <div className="flex flex-col gap-5 mb-8">
                  <input
                    className="w-full rounded-[5px] py-1 px-4 outline-none"
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full rounded-[5px] py-1 px-4 outline-none"
                    type="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="bg-white py-1 px-4 rounded-[5px] mb-5 text-customcolor font-medium">
                  Login
                </button>
                <p className="text-white/70 text-sm">
                  Don't have an account? <a className="text-white" href="/signup">Create an account</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Login;