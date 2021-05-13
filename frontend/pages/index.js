import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [error, setError] = useState(null);

  async function handleForm(e) {
    e.preventDefault();
    console.log(e);
    const email = e.target[0].value;
    const password = e.target[1].value;

    email == "" && password == ""
      ? setError("Je hebt nog niets ingevuld")
      : setError(null);

    if (error == null) {
      await fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCookie("user", JSON.stringify(data), {
            path: "/",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
          });
        });
    }
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <legend>Welkom</legend>
        <fieldset>
          <input type="text" name="email" id="email" />
          <input type="text" name="password" id="password" />
          <span>{error ? error : ""}</span>
          <button type="submit">Starten</button>
        </fieldset>
        <Link href="login">Ik ben een hulpaanbieder</Link>
        <Link href="login">Ik heb al een account</Link>
      </form>
    </>
  );
}
