import { useCookies } from "react-cookie";
import Link from "next/link";

export default function Login() {
  const [cookie, setCookie] = useCookies(["user"]);

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
        setCookie("user", JSON.stringify(data), {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });
      });
  }
  console.log(cookie);

  return (
    <>
      <form onSubmit={handleForm}>
        <input type="text" id="email" name="email" />
        <input type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
      <Link href="register">Register</Link>
    </>
  );
}
