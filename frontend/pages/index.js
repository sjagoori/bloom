import { useState } from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [regData, setRegData] = useState();

  const formik = useFormik({
    initialValues: {},
    onSubmit: values => {
      setRegData(regData => {
        return { ...regData, ...values }
      })
      setProgress(progress => progress + 1)
    },
  });

  const formElement = (props) => {
    return (
      <form onSubmit={formik.handleSubmit}>
        {props}
        <button type="submit">Submit</button>
      </form>
    )
  }

  switch (progress) {
    case 0:
      return formElement(accoutCredsData.map((item, index) => (
        <>
          <label key={index} htmlFor={item.id}>{item.label}
            <Text
              type={item.type}
              name={item.name}
              id={item.id}
              onChange={formik.handleChange}
              placebolder={item.placebolder}
            />
          </label>
        </>
      )))
    case 1:
      return formElement(personalInfoData.map((item, index) => (
        <label key={index} htmlFor={item.id}>{item.label}
          <Text
            type="text"
            name={item.name}
            id={item.id}
            onChange={formik.handleChange}
            placebolder={item.placebolder}
          />
        </label>
      )))
    case 2:
      return formElement(birthDateData.map((item, index) => (
        <label key={index} htmlFor={item.id}>{item.label}
          <DatePicker
            name={item.name}
            id={item.id}
            onChange={formik.handleChange}
          />
        </label>
      )))
    case 3:
      return formElement(residenceData.map((item, index) => (
        <label key={index} htmlFor={item.id}>{item.label}
          <Text
            type="text"
            name={item.name}
            id={item.id}
            onChange={formik.handleChange}
            placeholder={item.placeholder}
          />
        </label>
      )))
    case 4:
      return formElement(genderData.map((item, index) => (
        <label key={index} htmlFor={item.id}>{item.label}
          <Radio
            name={item.name}
            id={item.id}
            onChange={formik.handleChange}
            value={item.value}
          />
        </label>
      )))
    case 5:
      return formElement(kankerTypesData.map((item, index) => (
        <label key={index} htmlFor={item.id}>{item.label}
          <Checkbox
            name={item.name}
            id={item.id}
            onChange={formik.handleChange}
            value={item.value}
          />
        </label>
      ))
      )
    case 6:
      return formElement(pictogramData.map((item, index) => (
        <label key={index} htmlFor={item.id}>{item.label}
          <Radio
            name={item.name}
            id={item.id}
            onChange={formik.handleChange}
            value={item.value}
          />
        </label>
      )))
    case 7:
      return formElement(aboutData.map((item, index) => (
        <label key={index} htmlFor={item.id}>{item.label}
          <TextArea
            name={item.name}
            id={item.id}
            onChange={formik.handleChange}
            value={item.value}
            rows="10"
            cols="50"
          />
        </label>
      )))
    case 8:
      fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify(regData),
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
      return <>
        <h1>Let's start</h1>
        <Link href='/login'>Start</Link>
      </>
  }

  console.log(regData);
  console.log(progress);
}

const Checkbox = ({ type = "checkbox", name, onChange, id, value }) => (
  <input type={type} name={name} onChange={onChange} id={id} value={value} />
);

const Text = ({ type, name, placeholder, onChange, id }) => (
  <input type={type} name={name} placeholder={placeholder} id={id} onChange={onChange} />
)

const TextArea = ({ name, placeholder, onChange, id, rows, cols }) => (
  <textarea name={name} placeholder={placeholder} id={id} onChange={onChange} rows={rows} cols={cols} />
)

const DatePicker = ({ type = 'date', name, onChange, id }) => (
  <input type={type} name={name} id={id} onChange={onChange} />
)

const Radio = ({ type = "radio", name, onChange, id, value }) => (
  <input type={type} name={name} onChange={onChange} id={id} value={value} />
);

const accoutCredsData = [
  {
    type: 'email',
    name: 'email',
    label: 'Wat is je email adres?',
    placeholder: 'voorbeeld@domein.nl',
    id: 'email'
  },
  {
    type: 'password',
    name: 'password',
    label: 'Wat is je password',
    id: 'password'
  }
]

const personalInfoData = [
  {
    name: 'name',
    label: 'Hoe heet je?',
    placeholder: 'voornaamachternaam',
    id: 'name'
  }
]

const birthDateData = [
  {
    name: "birthDate",
    label: "Geboortedatum",
    id: 'birthDate',
  }
]

const kankerTypesData = [
  {
    name: "kankerType",
    label: "KankerType1",
    value: 'kanker1',
    id: 'kanker1',
  },
  {
    name: "kankerType",
    key: "checkBox2",
    label: "KankerType2",
    value: "kanker2",
    id: 'kanker2',
  }
];

const residenceData = [
  {
    name: "residence",
    label: "Waar woon je?",
    id: 'residence',
    placeholder: 'Voer hier je woonplaats in.'
  }
]

const genderData = [
  {
    name: "gender",
    label: "Man",
    value: 'man',
    id: 'gender-man',
  },
  {
    name: "gender",
    label: "Vrouw",
    value: 'Vrouw',
    id: 'gender-vrouw',
  },
  {
    name: "gender",
    label: "Neutraal",
    value: 'Neutraal',
    id: 'gender-neurtraal',
  },
]

let pictogramData = [
  {
    name: "pictogram",
    value: 'pictogram-1',
    id: 'pictogram-1',
  },
  {
    name: "pictogram",
    value: 'pictogram-2',
    id: 'pictogram-2',
  },
  {
    name: "pictogram",
    value: 'pictogram-3',
    id: 'pictogram-3',
  },
  {
    name: "pictogram",
    value: 'pictogram-4',
    id: 'pictogram-4',
  },
  {
    name: "pictogram",
    value: 'pictogram-5',
    id: 'pictogram-5',
  },
]

let aboutData = [
  {
    name: 'about',
    label: 'Vertel meer over jezelf',
    placeholder: 'Vertel meer over jezelf',
    id: 'about'
  }
]