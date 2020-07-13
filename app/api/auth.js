import client from "./client";

// On the backend, DO NOT hardcode the private key from jwt. Use environment variables instead
const login = (email, password) => client.post("/auth", { email, password });

const register = (userInfo) => client.post("/users", userInfo);

export default {
  login,
  register,
};
