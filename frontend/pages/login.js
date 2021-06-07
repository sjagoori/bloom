import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookie } from "../helpers/parseCookie";

export default function Login({ loginState }) {
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["user"]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loginState != undefined && JSON.parse(parseCookie(loginState).user))
      router.push({ pathname: "dashboard" });
  });

  async function handleForm(e) {
    e.preventDefault();

    let data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    await fetch("http://localhost:3001/login", {
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
      <Link href="/">Terug</Link>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <input type="text" id="email" name="email" />
        <input type="password" id="password" name="password" />
        <span>{error}</span>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

Login.getInitialProps = async (ctx) => ({
  loginState: ctx.req ? ctx.req.headers.cookie : null,
});
