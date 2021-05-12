
export default function Home() {

  async function handleForm(e) {
    e.preventDefault();

    let data = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    await fetch("http://localhost:3001/test", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json()).then(data => console.log(data));
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <input type="text" id="email" name="email" />
        <input type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
