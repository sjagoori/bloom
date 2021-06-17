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
      placeholder: "Naam",
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
      label: "Hoofd-halskanker",
      value: "Hoofd-halskanker",
      id: "typeKanker-hoofd",
    },
    {
      name: "kankerType",
      key: "checkBox2",
      label: "Spijsvertering organen",
      value: "Spijsverteringorganen",
      id: "typeKanker-spijs",
    },
    {
      name: "kankerType",
      key: "checkBox3",
      label: "Huid kanker",
      value: "Huidkanker",
      id: "typeKanker-huidKanker",
    },
    {
      name: "kankerType",
      key: "checkBox4",
      label: "Lucht wegen",
      value: "Luchtwegen",
      id: "typeKanker-luchtgeven",
    },
    {
      name: "kankerType",
      key: "checkBox5",
      label: "Borst kanker",
      value: "Borstkanker",
      id: "typeKanker-borstKanker",
    },
    {
      name: "kankerType",
      key: "checkBox6",
      label: "Urine wegen",
      value: "Urinewegen",
      id: "typeKanker-urine",
    },
    {
      name: "kankerType",
      key: "checkBox7",
      label: "Vrouwelijke geslachtsorganen",
      value: "VrouwelijkeGeslachtsorganen",
      id: "typeKanker-vrouwelijk",
    },
    {
      name: "kankerType",
      key: "checkBox8",
      label: "Oog kanker",
      value: "Oogkanker",
      id: "typeKanker-oog",
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
      label: "M",
      value: "man",
      id: "gender-man",
    },
    {
      name: "gender",
      label: "V",
      value: "Vrouw",
      id: "gender-vrouw",
    },
    {
      name: "gender",
      label: "X",
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
    {
      name: "pictogram",
      value: "pictogram-6",
      id: "pictogram-6",
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
