// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
      placeholder: "Wachtwoord",
    },
  ],
  personalInfoData: [
    {
      name: "name",
      label: "Hoe heet je?",
      placeholder: "Voornaam Achterdaam",
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


export default (req, res) => {
  res.status(200).json(onboardingData)
}
