import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, UserCircle } from "lucide-react";
import { useAuth } from "./context/AuthContext";
import BackgroundWrapper from "./BackgroundWrapper";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student" as "student" | "staff" | "parent",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(formData.email, formData.password, formData.role);
      toast.success("Login successful! Directing you to your portal..", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate(`/${formData.role}-portal`);
      }, 2000);
    } catch (err) {
      toast.error("Invalid credentials. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const inputVariants = {
    focused: { scale: 1.02, transition: { duration: 0.2 } },
    unfocused: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <BackgroundWrapper>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={formVariants}
          className="max-w-md w-full space-y-8 bg-inherit p-8 rounded-2xl shadow-sm border border-gray-300"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <UserCircle className="mx-auto h-12 w-12 text-blue-600" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-2xl font-bold text-blue-700"
            >
              Sign in to your account
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-sm text-gray-600"
            >
              Access your school portal
            </motion.p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="block text-sm font-medium text-gray-700">
                  Select Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      role: e.target.value as "student" | "staff" | "parent",
                    })
                  }
                  className="mt-1 block w-full pl-3 pr-10 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="student">Student</option>
                  <option value="staff">Staff</option>
                  <option value="parent">Parent</option>
                </select>
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <motion.input
                    variants={inputVariants}
                    whileFocus="focused"
                    initial="unfocused"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }}>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <motion.input
                    variants={inputVariants}
                    whileFocus="focused"
                    initial="unfocused"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                  />
                </div>
              </motion.div>
            </div>
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </motion.button>
          </form>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </motion.div>
        </motion.div>
      </div>
    </BackgroundWrapper>
  );
};

export default LoginPage;