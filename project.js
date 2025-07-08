const laws = {
  "privacy": "Information Technology Act, 2000 – Section 43A (Data Protection)",
  "cybersecurity": "Information Technology Act, 2000 – Section 66 (Cyber Crime)",
  "intellectual property": "Copyright Act, 1957",
  "employment discrimination": "Equal Remuneration Act, 1976",
  "data breach": "IT Rules, 2011 (under IT Act)",
  "medical consent": "Medical Council of India Guidelines",
  "product liability": "Consumer Protection Act, 2019",
  "corporate governance": "Companies Act, 2013",
  "bribery": "Prevention of Corruption Act, 1988",
  "human rights": "Protection of Human Rights Act, 1993",
  "false advertising": "Consumer Protection Act, 2019 – Section 2(28)",
  "personal data": "Digital Personal Data Protection Act, 2023",
  "workplace harassment": "Sexual Harassment of Women at Workplace Act, 2013",
  "tax evasion": "Income Tax Act, 1961 – Section 276C",
  "insider trading": "SEBI Act, 1992 – Section 15G",
  "freedom of speech": "Article 19(1)(a) of Indian Constitution",
  "animal cruelty": "Prevention of Cruelty to Animals Act, 1960",
  "consumer fraud": "Consumer Protection Act, 2019",
  "labor rights": "Industrial Disputes Act, 1947",
  "food safety": "Food Safety and Standards Act, 2006",
  "medical malpractice": "Indian Medical Council Act, 1956",
  "age discrimination": "Maintenance and Welfare of Parents and Senior Citizens Act, 2007",
  "whistleblower": "Whistle Blowers Protection Act, 2014",
  "antitrust": "Competition Act, 2002",
  "drug trafficking": "Narcotic Drugs and Psychotropic Substances Act, 1985",
  "sexual harassment": "POSH Act, 2013",
  "disability rights": "Rights of Persons with Disabilities Act, 2016",
  "money laundering": "Prevention of Money Laundering Act, 2002",
  "child labor": "Child Labour (Prohibition and Regulation) Act, 1986",
  "false imprisonment": "Indian Penal Code, Section 340",
  "defamation": "Indian Penal Code, Sections 499 & 500",
  "freedom of information": "Right to Information Act, 2005",
  "patent infringement": "Patents Act, 1970",
  "gun control": "Arms Act, 1959",
  "domestic violence": "Protection of Women from Domestic Violence Act, 2005",
  "human trafficking": "Immoral Traffic (Prevention) Act, 1956",
  "elder abuse": "Maintenance and Welfare of Parents and Senior Citizens Act, 2007",
  "obscenity": "Indian Penal Code, Section 292",
  "election fraud": "Representation of the People Act, 1951",
  "tax fraud": "Income Tax Act, 1961 – Section 276C",
  "embezzlement": "IPC Sections 403 & 405",
  "price fixing": "Competition Act, 2002",
  "immigration violations": "Foreigners Act, 1946",
  "bankruptcy fraud": "Insolvency and Bankruptcy Code, 2016",
  "unfair competition": "Competition Act, 2002",
  "cyberstalking": "IT Act, Section 66E",
  "pyramid schemes": "Prize Chits and Money Circulation Schemes (Banning) Act, 1978",
  "ethical ai": "NITI Aayog’s Principles for Responsible AI",
  "cyberbullying": "IT Act, Section 66A (Struck down but referenced)",
  "identity theft": "IT Act, Section 66C",
  "hate speech": "IPC Sections 153A & 295A",
  "espionage": "Official Secrets Act, 1923",
  "war crimes": "Geneva Conventions (India ratified)",
  "terrorism": "Unlawful Activities (Prevention) Act, 1967",
  "corporate fraud": "Companies Act, 2013 – Section 447",
  "breach of contract": "Indian Contract Act, 1872"
};

// Calculate basic similarity
function similarity(str1, str2) {
  const len = Math.max(str1.length, str2.length);
  if (len === 0) return 1.0;
  let match = 0;
  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if (str1[i] === str2[i]) match++;
  }
  return match / len;
}

// Find best matching law
function getClosestLaw(input, dictionary) {
  const keys = Object.keys(dictionary);
  let bestMatch = '';
  let highestScore = 0;

  keys.forEach((key) => {
    const score = similarity(input.toLowerCase(), key.toLowerCase());
    if (score > highestScore) {
      highestScore = score;
      bestMatch = key;
    }
  });

  return bestMatch ? dictionary[bestMatch] : "No relevant Indian law found.";
}

// Handle form
document.getElementById('lawForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const issue = document.getElementById('issue').value;
  const law = getClosestLaw(issue, laws);
  document.getElementById('result').textContent = `Relevant Indian Law for "${issue}": ${law}`;
});
