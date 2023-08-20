import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to="/">
        <h1 className="text-2xl font-bold">Administrador de facturas</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>Bienvenido {user.username}</li>
            <li>
              <Link
                to="/add-bill"
                className="bg-blue-800 text-white px-4 py-1 rounded-sm"
              >
                Crear factura
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="bg-blue-800 text-white px-4 py-1 rounded-sm">
                Ingresar
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-blue-800 text-white px-4 py-1 rounded-sm"
              >
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
