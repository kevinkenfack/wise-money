export const Currencies = [
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
  // { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
  // { value: "GBP", label: "£ Pound", locale: "en-GB" },
  { value: "XAF", label: "Franc CFA d'Afrique centrale", locale: "fr-FR" }, // Ajouté XAF
  { value: "XOF", label: "Franc CFA d'Afrique de l'Ouest", locale: "fr-FR" }, // Ajouté XOF
];

export type Currency = (typeof Currencies)[0];
