import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ loginState }, ctx) {
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [regData, setRegData] = useState();
  const router = useRouter();

  useEffect(() =>{
    // TODO use parseCookie function to specifically find "user" inb4 we confuse 'm w/ new cookies later on 
    // if (loginState) router.push({ pathname: "dashboard" });
    console.log(loginState);
  })

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      if (Object.keys(values).length == 0) {
        setError("Je hebt nog niets ingevuld");
      } else if (progress == 7) {
        fetch("http://localhost:3001/register", {
          method: "POST",
          body: JSON.stringify(regData),
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
              : (setProgress(0), setError(data.msg));
          });
      } else {
        setRegData((regData) => ({ ...regData, ...values }));
        setProgress((progress) => progress + 1);
        setError((error) => (error = null));
      }
    },
  });

  const formElement = (props) => {
    return (
      <form onSubmit={formik.handleSubmit}>
        {progress > 0 ? (
          <a onClick={() => setProgress(progress - 1)}>Back</a>
        ) : null}
        {props}
        <span>{error ? error : ""}</span>
        <button type="submit">Submit</button>
      </form>
    );
  };

  switch (progress) {
    case 0:
      return formElement(
        <>
          {onboardingData.accountCredsData.map((item, index) => (
            <>
              <Text
                type={item.type}
                name={item.name}
                id={item.id}
                onChange={formik.handleChange}
                placebolder={item.placebolder}
              />
              <label key={index} htmlFor={item.id}>
                {item.label}
              </label>
            </>
          ))}
          <Link href="/login">Ik heb al een account</Link>
          <Link href="/login">Ik ben een hulpverlener</Link>
        </>
      );
    case 1:
      return formElement(
        onboardingData.personalInfoData.map((item, index) => (
          <>
            <Text
              type="text"
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              placebolder={item.placebolder}
            />
            <label key={index} htmlFor={item.id}>
              {item.label}
            </label>
          </>
        ))
      );
    case 2:
      return formElement(
        onboardingData.birthDateData.map((item, index) => (
          <>
            <DatePicker
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
            />
            <label key={index} htmlFor={item.id}>
              {item.label}
            </label>
          </>
        ))
      );
    case 3:
      return formElement(
        onboardingData.residenceData.map((item, index) => (
          <>
            <Text
              type="text"
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              placeholder={item.placeholder}
            />
            <label key={index} htmlFor={item.id}>
              {item.label}
            </label>
          </>
        ))
      );
    case 4:
      return formElement(
        onboardingData.genderData.map((item, index) => (
          <>
            <Radio
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              value={item.value}
            />
            <label key={index} htmlFor={item.id}>
              {item.label}
            </label>
          </>
        ))
      );
    case 5:
      return formElement(
        onboardingData.kankerTypesData.map((item, index) => (
          <>
            <Checkbox
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              value={item.value}
            />
            <label key={index} htmlFor={item.id}>
              {item.label}
            </label>
          </>
        ))
      );
    case 6:
      return formElement(
        onboardingData.pictogramData.map((item, index) => (
          <>
            <Radio
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              value={item.value}
            />
            <label key={index} htmlFor={item.id}>
              {item.label}
            </label>
          </>
        ))
      );
    case 7:
      return formElement(
        onboardingData.aboutData.map((item, index) => (
          <>
            <TextArea
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              value={item.value}
              rows="10"
              cols="50"
            />
            <label key={index} htmlFor={item.id}>
              {item.label}
            </label>
          </>
        ))
      );
    case 8:
      return (
        <>
          <h1>Let's start</h1>
          <Link href="/login">Start</Link>
        </>
      );
  }
}

const Checkbox = ({ type = "checkbox", name, onChange, id, value }) => (
  <input type={type} name={name} onChange={onChange} id={id} value={value} />
);

const Text = ({ type, name, placeholder, onChange, id }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    id={id}
    onChange={onChange}
  />
);

const TextArea = ({ name, placeholder, onChange, id, rows, cols }) => (
  <textarea
    name={name}
    placeholder={placeholder}
    id={id}
    onChange={onChange}
    rows={rows}
    cols={cols}
  />
);

const DatePicker = ({ type = "date", name, onChange, id }) => (
  <input type={type} name={name} id={id} onChange={onChange} />
);

const Radio = ({ type = "radio", name, onChange, id, value }) => (
  <input type={type} name={name} onChange={onChange} id={id} value={value} />
);

const onboardingData = {
  accountCredsData: [
    {
      type: "email",
      name: "email",
      label: "Wat is je email adres?",
      placeholder: "voorbeeld@domein.nl",
      id: "email",
    },
    {
      type: "password",
      name: "password",
      label: "Wat is je password",
      id: "password",
    },
  ],
  personalInfoData: [
    {
      name: "name",
      label: "Hoe heet je?",
      placeholder: "voornaamachternaam",
      id: "name",
    },
  ],
  birthDateData: [
    {
      name: "birthDate",
      label: "Geboortedatum",
      id: "birthDate",
    },
  ],
  kankerTypesData: [
    {
      name: "kankerType",
      label: "KankerType1",
      value: "kanker1",
      id: "kanker1",
    },
    {
      name: "kankerType",
      key: "checkBox2",
      label: "KankerType2",
      value: "kanker2",
      id: "kanker2",
    },
  ],
  residenceData: [
    {
      name: "residence",
      label: "Waar woon je?",
      id: "residence",
      placeholder: "Voer hier je woonplaats in.",
    },
  ],
  genderData: [
    {
      name: "gender",
      label: "Man",
      value: "man",
      id: "gender-man",
    },
    {
      name: "gender",
      label: "Vrouw",
      value: "Vrouw",
      id: "gender-vrouw",
    },
    {
      name: "gender",
      label: "Neutraal",
      value: "Neutraal",
      id: "gender-neurtraal",
    },
  ],
  pictogramData: [
    {
      name: "pictogram",
      value: "pictogram-1",
      id: "pictogram-1",
    },
    {
      name: "pictogram",
      value: "pictogram-2",
      id: "pictogram-2",
    },
    {
      name: "pictogram",
      value: "pictogram-3",
      id: "pictogram-3",
    },
    {
      name: "pictogram",
      value: "pictogram-4",
      id: "pictogram-4",
    },
    {
      name: "pictogram",
      value: "pictogram-5",
      id: "pictogram-5",
    },
  ],
  aboutData: [
    {
      name: "about",
      label: "Vertel meer over jezelf",
      placeholder: "Vertel meer over jezelf",
      id: "about",
    },
  ],
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

Home.getInitialProps = async (ctx) =>  ({ loginState:  ctx.req ? ctx.req.headers.cookie : null });
