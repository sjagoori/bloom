import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookie } from "../helpers/parseCookie";
import Link from "next/link";
import { useCookies } from "react-cookie";
import styles from "../styles/Login.module.css";

export default function Login() {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["user"]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (window.document.cookie)
      JSON.parse(parseCookie(window.document.cookie).user).data.user_id != ''
        ? router.push({ pathname: "dashboard" })
        : router.push({ pathname: "/" })
  });

  async function handleForm(e) {
    e.preventDefault();

    let data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    await fetch("https://bloom.bloomingbooty.repl.co/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.status === 200
          ? (setCookie("user", JSON.stringify(data), {
            path: "/",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
          }),
            router.push({
              pathname: "dashboard",
            }))
          : setError("Email or password incorrect");
      });
  }

  return (
    <>
      <div className={`${styles.container}`}>
        <Link href="/"><img src="/icons/chevron-icoon.svg" alt="Back" className={`${styles.svgIcon} ${styles.rotate}`} /></Link>
        <div className={`${styles.formContainer}`}>
          <h1>Welkom Terug</h1>
          <form onSubmit={handleForm}>
            <input type="text" id="email" name="email" placeholder="Emailadres" />
            <input type="password" id="password" name="password" placeholder="Wachtwoord" />
            <button type="submit" className={`${styles.button}`}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
