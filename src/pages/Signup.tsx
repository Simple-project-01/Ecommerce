import { useState, FormEvent } from "react";
import Helment from "../components/Helment/Helment";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Helment title="Signup">
      <section>
        <div className="px-36">
          <div className="py-10 flex flex-col items-center">
            <div className="w-[40%] flex flex-col items-center">
              <h3 className="text-center text-customcolor font-semibold text-2xl mb-5">Signup</h3>
              <form
                onSubmit={handleSubmit}
                className="bg-customcolor h-full w-[120%] text-center p-7 rounded-md"
              >
                <div className="flex flex-col gap-5 mb-8">
                  <div>
                    <input
                      className="w-full rounded-[5px] py-1 px-4 outline-none"
                      type="text"
                      placeholder="Enter your username"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-[5px] py-1 px-4 outline-none"
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      className="w-full rounded-[5px] py-1 px-4 outline-none"
                      type="password"
                      placeholder="Enter your password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-white py-1 px-4 rounded-[5px] mb-5 text-customcolor font-medium"
                >
                  Create an Account
                </button>
                <p className="text-white/70 text-sm">
                  Already have an account?{" "}
                  <Link className="text-white" to="/login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Helment>
  );
};

export default Signup;