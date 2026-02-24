'use client';

import Link from "next/link";
import { useState } from "react";
import { register } from "@/Api/Api";
export default function HomePage() {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(username, name, password);
    };

    return (
        <div>
            <h1>Registro</h1>
<main>
    <h1>Bienvenido</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Registrar</button>
            </form>
</main>
            <div>
                <Link href="/PageLocales">Ir a Locales</Link>
                <br />
                <Link href="/PageProductos">Ir a Productos</Link>
            </div>
        </div>
    );
}





