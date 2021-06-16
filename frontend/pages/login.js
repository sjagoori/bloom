import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookie } from "../utils/parseCookie";
import Link from "next/link";
import { useCookies } from "react-cookie";
import styles from "../styles/Login.module.css";

export default function Login() {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["user"]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (window.document.cookie)
    //   JSON.parse(parseCookie(window.document.cookie).user).data.user_id != ''
    //     ? router.push({ pathname: "dashboard" })
    //     : router.push({ pathname: "/" })
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
        if (data.status === 200) {
          setCookie("user", JSON.stringify(data.data.user_id), {
            path: "/",
            maxAge: 36000, // Expires after 1hr
            sameSite: true,
          });

          return router.push({
            pathname: "blog",
          });
        } else if (data.status === 400) {
          setError("Email or password incorrect");
        }
        console.log(data);
      });
  }

  return (
    <>
      <div className={`${styles.container}`}>
        <Link href="/">
          <img
            src="/icons/chevron-icoon.svg"
            alt="Back"
            className={`${styles.svgIcon} ${styles.rotate}`}
          />
        </Link>
        <div className={`${styles.formContainer}`}>
          <h1>Welkom Terug</h1>
          <p>{error}</p>
          <form onSubmit={handleForm}>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Emailadres"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Wachtwoord"
            />
            <button type="submit" className={`${styles.button}`}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
