import { useState } from "react";
import useRegister from "../hooks/useRegister";

export default function useRegisterForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("USER");

  const { loading, error, handleRegister } = useRegister();

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await handleRegister(email, username, password, confirmPassword, role);
    if (user) {
      console.log("Registro exitoso:", user);
      // Redirigir o mostrar confirmación
    }
  };

  return {
    email, setEmail,
    username, setUsername,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    showPassword, setShowPassword,
    role, setRole,
    loading, error,
    onSubmit
  };
}
