const countries = [
  { "code": "AL", "name": "Albania", "length": 28, "character": 0 },
  { "code": "DZ", "name": "Algeria", "length": 24, "character": 0 },
  { "code": "AD", "name": "Andorra", "length": 24, "character": 0 },
  { "code": "AO", "name": "Angola", "length": 25, "character": 0 },
  { "code": "AT", "name": "Austria", "length": 20, "character": 0 },
  { "code": "AZ", "name": "Azerbaijan", "length": 28, "character": 4 },
  { "code": "BH", "name": "Bahrain", "length": 22, "character": 4 },
  { "code": "BE", "name": "Belgium", "length": 16, "character": 0 },
  { "code": "BJ", "name": "Benin", "length": 26, "character": 1 },
  { "code": "BA", "name": "Bosnia", "length": 20, "character": 0 },
  { "code": "BR", "name": "Brazil", "length": 29, "character": 0 },
  { "code": "BG", "name": "Bulgaria", "length": 22, "character": 4 },
  { "code": "BF", "name": "Burkina_Faso", "length": 27, "character": 0 },
  { "code": "BI", "name": "Burundi", "length": 16, "character": 0 },
  { "code": "CM", "name": "Cameroon", "length": 27, "character": 0 },
  { "code": "CV", "name": "Cape_Verde", "length": 25, "character": 0 },
  { "code": "TD", "name": "Chad", "length": 27, "character": 0 },
  { "code": "KM", "name": "Comoros", "length": 27, "character": 0 },
  { "code": "CG", "name": "Congo", "length": 27, "character": 0 },
  { "code": "CR", "name": "Costa_rica", "length": 21, "character": 0 },
  { "code": "HR", "name": "Croatia", "length": 21, "character": 0 },
  { "code": "CY", "name": "Cyprus", "length": 28, "character": 0 },
  { "code": "CZ", "name": "Czechia", "length": 24, "character": 0 },
  { "code": "DK", "name": "Denmark", "length": 18, "character": 0 },
  { "code": "DO", "name": "Dominicana", "length": 28, "character": 4 },
  { "code": "EG", "name": "Egypt", "length": 27, "character": 0 },
  { "code": "EE", "name": "Estonia", "length": 20, "character": 0 },
  { "code": "FO", "name": "Faroe_Islands", "length": 18, "character": 0 },
  { "code": "FI", "name": "Finland", "length": 18, "character": 0 },
  { "code": "FR", "name": "France", "length": 27, "character": 0 },
  { "code": "GA", "name": "Gabon", "length": 27, "character": 0 },
  { "code": "GE", "name": "Georgia", "length": 22, "character": 0 },
  { "code": "DE", "name": "Germany", "length": 22, "character": 0 },
  { "code": "GI", "name": "Gibraltar", "length": 23, "character": 4 },
  { "code": "GB", "name": "Great_Britain", "length": 22, "character": 4 },
  { "code": "GR", "name": "Greece", "length": 27, "character": 0 },
  { "code": "GL", "name": "Greenland", "length": 18, "character": 0 },
  { "code": "GT", "name": "Guatemala", "length": 28, "character": 0 },
  { "code": "HN", "name": "Honduras", "length": 28, "character": 4 },
  { "code": "HU", "name": "Hungary", "length": 28, "character": 0 },
  { "code": "IS", "name": "Iceland", "length": 26, "character": 0 },
  { "code": "IR", "name": "Iran", "length": 26, "character": 0 },
  { "code": "IE", "name": "Ireland", "length": 22, "character": 4 },
  { "code": "IL", "name": "Israel", "length": 23, "character": 0 },
  { "code": "IT", "name": "Italy", "length": 27, "character": 1 },
  { "code": "CI", "name": "Ivory_Coast", "length": 28, "character": 1 },
  { "code": "JO", "name": "Jordan", "length": 30, "character": 4 },
  { "code": "KZ", "name": "Kazakhstan", "length": 20, "character": 0 },
  { "code": "XK", "name": "Kosovo", "length": 20, "character": 0 },
  { "code": "KW", "name": "Kuwait", "length": 30, "character": 4 },
  { "code": "LB", "name": "Lebanon", "length": 28, "character": 0 },
  { "code": "LI", "name": "Liechtenstein", "length": 21, "character": 0 },
  { "code": "LT", "name": "Lithuania", "length": 20, "character": 0 },
  { "code": "LU", "name": "Luxembourg", "length": 20, "character": 0 },
  { "code": "MK", "name": "Macedonia", "length": 19, "character": 0 },
  { "code": "MG", "name": "Madagascar", "length": 27, "character": 0 },
  { "code": "ML", "name": "Mali", "length": 28, "character": 1 },
  { "code": "MT", "name": "Malta", "length": 31, "character": 4 },
  { "code": "MR", "name": "Mauritania", "length": 27, "character": 0 },
  { "code": "MU", "name": "Mauritius", "length": 30, "character": 4 },
  { "code": "MD", "name": "Moldova", "length": 24, "character": 0 },
  { "code": "MC", "name": "Monaco", "length": 27, "character": 0 },
  { "code": "ME", "name": "Montenegro", "length": 22, "character": 0 },
  { "code": "MA", "name": "Morocco", "length": 28, "character": 0 },
  { "code": "MZ", "name": "Mozambique", "length": 25, "character": 0 },
  { "code": "NL", "name": "Netherlands", "length": 18, "character": 4 },
  { "code": "NI", "name": "Nicuragua", "length": 32, "character": 4 },
  { "code": "NE", "name": "Niger", "length": 28, "character": 0 },
  { "code": "NO", "name": "Norway", "length": 15, "character": 0 },
  { "code": "PK", "name": "Pakistan", "length": 24, "character": 4 },
  { "code": "PS", "name": "Palestine", "length": 29, "character": 4 },
  { "code": "PL", "name": "Poland", "length": 28, "character": 0 },
  { "code": "PT", "name": "Portugal", "length": 25, "character": 0 },
  { "code": "QA", "name": "Qatar", "length": 29, "character": 4 },
  { "code": "RO", "name": "Romania", "length": 24, "character": 4 },
  { "code": "LC", "name": "Saint_Lucia", "length": 32, "character": 4 },
  { "code": "SM", "name": "San_Marino", "length": 27, "character": 1 },
  { "code": "ST", "name": "Sao_Tome_Principe", "length": 25, "character": 0 },
  { "code": "SA", "name": "Saudi", "length": 24, "character": 0 },
  { "code": "SN", "name": "Senegal", "length": 28, "character": 1 },
  { "code": "SC", "name": "Seychelles", "length": 31, "character": 4 },
  { "code": "SK", "name": "Slovakia", "length": 24, "character": 0 },
  { "code": "SI", "name": "Slovenia", "length": 19, "character": 0 },
  { "code": "ES", "name": "Spain", "length": 24, "character": 0 },
  { "code": "SE", "name": "Sweden", "length": 24, "character": 0 },
  { "code": "CH", "name": "Switzerland", "length": 21, "character": 0 },
  { "code": "TL", "name": "Timor_Leste", "length": 23, "character": 0 },
  { "code": "TG", "name": "Togo", "length": 28, "character": 0 },
  { "code": "TN", "name": "Tunisia", "length": 24, "character": 0 },
  { "code": "TR", "name": "Turkey", "length": 26, "character": 0 },
  { "code": "AE", "name": "UAE", "length": 23, "character": 0 },
  { "code": "UA", "name": "Ukraine", "length": 29, "character": 0 },
  { "code": "VG", "name": "Virgin_Islands", "length": 24, "character": 4 }
];

function getCountryName(country) {
  if (!country) return ''
  return country.replace(/_/g, ' ');
}

export { countries, getCountryName };