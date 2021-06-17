import LoadingScreen from "@/components/loadingScreen/loadingScreen";
import Avatar from 'boring-avatars';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Header from '../components/header/Header';
import styles from "../styles/Registration.module.css";

export default function Home({ loginState }, ctx) {
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null);
  const [regData, setRegData] = useState();
  const router = useRouter();
  const [cookie, setCookie] = useCookies(["user"]);
  const [onboardingData, setOnboardingData] = useState();

  useEffect(async () => {
    let onboardingData = await fetch("/api/onboarding").then(res => res.json()).then(data => data)
    setOnboardingData(onboardingData)
    setProgress(0)
    console.log(onboardingData)
  }, [])

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      if (Object.keys(values).length == 0) {
        setError("Je hebt nog niets ingevuld");
      } else if (progress == 7) {
        fetch(`https://bloom.bloomingbooty.repl.co/register`,
          {
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
                  pathname: "blog",
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

  const formElement = (header, props) => {
    return (
      <div className={styles.container}>
        {progress > 0 ? <a onClick={() => setProgress(progress - 1)}><img className={`${styles.rotate} ${styles.backButton}`} src="/icons/chevron-icoon.svg" alt="Back"></img></a> : null}

        <Header name={header} isBlogs={false} />

        <form onSubmit={formik.handleSubmit}>
          <div className={styles.formContainer}>
            {props}
            <span className={styles.error}>{error ? error : ""}</span>
          </div>
          <button className={styles.button} type="submit"><span>Volgende</span><span><img src="/icons/chevron-icoon.svg" /></span></button>
        </form>
      </div>
    )
  }

  switch (progress) {
    case 0:
      return formElement("Bloom",
        <>
          <h2>Welkom</h2>
          {onboardingData.accountCredsData.map((item, index) => (
            <>
              <Text
                key={index}
                type={item.type}
                name={item.name}
                id={item.id}
                onChange={formik.handleChange}
                placeholder={item.placeholder}
              />
            </>
          ))}
          <Link href="/login"><a>Ik heb al een account</a></Link>
          {/* <Link href="/login"><a>Ik ben een hulpverlener</a></Link> */}
        </>
      );
    case 1:
      return formElement("Wat is je naam?",
        onboardingData.personalInfoData.map((item, index) => (
          <>
          <p className={styles.subText}>Dan weten gebruikers hoe ze je kunnen aanspreken. Dit mag ook een verzonnen naam zijn.</p>
            <Text
              key={index}
              type="text"
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              placeholder={item.placeholder}
            />
            <img className={styles.progressFlower} src= "/icons/signup-achtergrond-2.svg"/>
            {/* <label key={index} htmlFor={item.id}>{item.label}</label> */}
          </>
        )))
    case 2:
      return formElement("Wat is je geboortedatum",
        onboardingData.birthDateData.map((item, index) => (
          <>
          <p className={styles.subText}>Dan kunnen we je koppeleen aan leeftijdsgenoten.</p>
            <DatePicker
              key={index}
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
            />
            <img className={styles.progressFlower} src="/icons/signup-achtergrond-3.svg"/>
            {/* <label key={index} htmlFor={item.id}>
              {item.label}
            </label> */}
          </>
        ))
      );
    case 3:
      return formElement("Wat is je woonplaats?",
        onboardingData.residenceData.map((item, index) => (
          <>
          <p className={styles.subText}>Dan kunnen we je suggesties geven voor hulpaanbieders bij jou in de buurt. Dit is niet zichtbaar voor andere gebruikers.</p>
            <Text
              key={index}
              type="text"
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              placeholder={item.placeholder}
            />
            <img className={styles.progressFlower} src="/icons/signup-achtergrond-4.svg"/>
            {/* <label key={index} htmlFor={item.id}>
              {item.label}
            </label> */}
          </>
        ))
      );
    case 4:
      return formElement("Wat is je gender?",
      <article className={styles.genderContainer}>
        {onboardingData.genderData.map((item, index) => (
          <>
            <Radio
              key={index}
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              value={item.value}
            />
              <label key={index} htmlFor={item.id}>
                {item.label}
              </label>
            {/* <div>
              <span>{item.value}</span>
            </div> */}
          </>
        ))}
      </article>
      );
    case 5:
      return formElement("Welke type kanker heb je gehad?",
        onboardingData.kankerTypesData.map((item, index) => (
          <>
            <Checkbox
              key={index}
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
      return formElement("Kies een profiel pictogram",
      <article className={styles.pictogramContainer}>
      {onboardingData.pictogramData.map((item, index) => (
        <section className={styles.pictogram}>
          <>
            <Radio
              key={index}
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              value={item.value}
            />
            <label key={index} htmlFor={item.id}>
              <Avatar
                key={index}
                size={60}
                name={item.value}
                variant="beam"
                colors={["#FEE89E", "#F07A06", "#F07903", "#3CB2FF", "#CE6F88"]}
              ></Avatar>
            </label>
          </>
          </section>
        ))}
        </article>
      );
    case 7:
      return formElement("Vertel iets over jezelf",
        onboardingData.aboutData.map((item, index) => (
          <>
          <p className={styles.subText}>Is er nog iets wat je zou willen delen? dan kan je dit kwijt in je biografie.</p>
            <TextArea
              key={index}
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              value={item.value}
              rows="10"
              cols="50"
              placeholder={item.label}
            />
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
    default:
      return (
        <LoadingScreen />
      )
  }
}

Home.getInitialProps = async (ctx) => ({
  loginState: ctx.req ? ctx.req.headers.cookie : null,
});

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

