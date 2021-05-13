import Link from "next/link";
import { useState, useRef, useEffect, useContext, createContext } from "react";

export default function Home() {
  const [error, setError] = useState(null);
  const [regData, setRegData] = useState(null);
  const [progress, setProgress] = useState(0);
  let mounted = useRef(false)

  function steps(step) {
    switch (step) {
      case 0:
        return (
          <form onSubmit={handleForm} action='/register'>
            <legend>Welkom</legend>
            <fieldset>
              <input type="text" name="email" id="email" />
              <input type="text" name="password" id="password" />
              <span>{error ? error : ""}</span>
              <button type="submit">Starten</button>
            </fieldset>
            <Link href="/login">Ik ben een hulpaanbieder</Link>
            <Link href="/login">Ik heb al een account</Link>
          </form>
        )
      case 1:
        return (
          <>
            <p onClick={() => setProgress(progress - 1)}>terug</p>
            <input type="text" name="name" id="name" placeholder="Naam" />
            <p onClick={() => {
              setProgress(progress + 1)
              regData.name = document.getElementById('name').value
            }}>volgende</p>
          </>
        )
      case 2:
        return (
          <>
            <p onClick={() => setProgress(progress - 1)}>terug</p>
            <input type="date" name="birthDate" id="birthDate" />
            <p onClick={() => {
              setProgress(progress + 1)
              regData.birthDate = document.getElementById('birthDate').value
            }}>volgende</p>
          </>
        )
      case 3:
        return (
          <>
            <p onClick={() => setProgress(progress - 1)}>terug</p>
            <input type="text" name="residence" id="residence" placeholder="Woonplaats" />
            <p onClick={() => {
              setProgress(progress + 1)
              regData.residence = document.getElementById('residence').value
            }}>volgende</p>
          </>
        )
      case 4:
        return (
          <>
            <p onClick={() => setProgress(progress - 1)}>terug</p>
            Gender
            <input type="radio" name="genders" id="male" />
            <input type="radio" name="genders" id="female" />
            <input type="radio" name="genders" id="fluid" />
            <p onClick={() => {
              setProgress(progress + 1)
              regData.gender = document.querySelector('input[name="genders"]:checked').value;
            }}>volgende</p>
          </>
        )
      case 5:
        return (
          <>
            <p onClick={() => setProgress(progress - 1)}>terug</p>
            <label htmlFor="type1">Type1</label>
            <input type="checkbox" name="kanker" id="type1" />
            <label htmlFor="type2">Type2</label>
            <input type="checkbox" name="kanker" id="type2" />
            <p onClick={() => {
              setProgress(progress + 1)
              let types = document.querySelector('input[name="kanker"]:checked')
              regData.types = Object.values(types).find(key => key.checked)
            }}>volgende</p>
          </>
        )
      case 6:
        return (
          <>
            <p onClick={() => setProgress(progress - 1)}>terug</p>
            Pictogram
            <p onClick={() => {
              setProgress(progress + 1)
            }}>volgende</p>
          </>
        )
      case 7:
        return (
          <>
            <p onClick={() => setProgress(progress - 1)}>terug</p>
            Over jezelf
          </>
        )
    }
  }

  console.log(regData);

  async function handleForm(e) {
    e.preventDefault();
    const email = e.target[1].value;
    const password = e.target[2].value;

    email == "" && password == ""
      ? setError("Je hebt nog niets ingevuld")
      : (setRegData({
        email: email,
        password: password
      }), setProgress(1));
  }

  return (
    <>
      {steps(progress)}
    </>
  );
}
