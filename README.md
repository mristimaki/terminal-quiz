# 🕌 Islam Quiz - Interaktivt kunskapstest

Ett interaktivt quiz-spel om Islam med 10 roliga och lärorika frågor baserade på Quran och Sunnah. Spelet är byggt i Node.js och använder `readline-sync` för att ta emot användarinput via terminalen.

## 📋 Om projektet

Detta quiz innehåller intressanta fakta om Islam som många kanske inte alla känner till, till exempel:
- Vad "Jihad" egentligen betyder
- Numeriska mirakel i Quranen (t.ex. hur ofta "dag" och "månad" nämns)
- Vetenskapliga fakta som uppenbarades i Quranen
- Berättelsen bakom det svenska uttrycket "sjusovare"

## 🎮 Hur man spelar

1. Klona eller ladda ner projektet
2. Installera dependencies:
```bash
   npm install readline-sync
```
3. Kör spelet:
```bash
   node quiz.mjs
```
4. Svara på frågorna genom att skriva A, B, C eller D
5. Få omedelbar feedback efter varje fråga
6. Se ditt slutresultat när alla frågor är besvarade!

## 🎯 Funktioner

- ✅ 10 välformulerade frågor med 4 svarsalternativ vardera
- ✅ Poängräkning som håller koll på antal rätt svar
- ✅ Förklaringar efter varje fråga (rätt som fel)
- ✅ Slutresultat med procent och uppmuntrande kommentarer
- ✅ Tydlig och lättläst design i terminalen

## 📚 Vad jag tränade på i detta projekt

### JavaScript-grunderna
- **Variabler**: `let`, `const` för att lagra data
- **Datatyper**: Strängar, nummer, objekt och arrayer
- **If/else-satser**: För att kolla rätt/fel svar och ge olika feedback
- **Loopar**: `for`-loop för att gå igenom alla frågor
- **Funktioner**: Skapade `startQuiz()` och `prompt()` funktioner

### Arbeta med komplexa datastrukturer
- **Objekt**: Varje fråga är ett objekt med properties (question, options, correctAnswer, explanation)
- **Array av objekt**: Alla frågor samlade i en `questions` array
- **Att komma åt data**: `questions[i].question`, `q.options[j]`

### String-manipulation
- **Template literals**: `` `Fråga ${i + 1} av ${questions.length}` ``
- **String-metoder**: `.toUpperCase()` för att konvertera svar till versaler
- **Escape-tecken**: `\n` för radbrytningar

### User Input/Output
- **Console.log**: För att visa text i terminalen
- **readline-sync**: För att ta emot input från användaren
- **Formatering**: Skapa snygg layout med separatorer och emojis

### Matematiska beräkningar
- **Procenträkning**: `(score / questions.length) * 100`
- **Jämförelseoperatorer**: `===`, `>=` för att kolla poäng och ge kommentarer

### Programlogik och flödeskontroll
- **Loop-struktur**: Systematiskt gå igenom alla frågor
- **Villkorssatser**: Olika meddelanden beroende på resultat
- **Score-system**: Räkna och hålla koll på poäng genom hela spelet

### ES6 Modules
- **Import/Export**: `import { question } from "readline-sync"`
- **Wrapper-funktioner**: Skapade `prompt()` för enklare användning

## 🛠️ Tekniker

- **Node.js**: JavaScript runtime
- **ES6+ syntax**: Modern JavaScript
- **readline-sync**: NPM-paket för user input
- **Kommentarer**: Tydliga kommentarer för att förklara koden

## 📁 Projektstruktur
```
quiz-project/
│
├── quiz.mjs          # Huvudfilen med hela quiz-logiken
├── package.json      # NPM konfiguration och dependencies
├── README.md         # Denna fil
└── node_modules/     # Installerade NPM-paket
```

## 💡 Möjliga vidareutvecklingar

Idéer för framtida förbättringar:
- [ ] Lägga till en timer för varje fråga
- [ ] Spara highscores i en fil
- [ ] Slumpa ordningen på frågorna
- [ ] Möjlighet att spela igen utan att starta om programmet
- [ ] Exportera frågorna till en separat JSON-fil
- [ ] Skapa en webversion med HTML/CSS

## 👨‍💻 Lärande

Detta projekt hjälpte mig att förstå:
- Hur man strukturerar ett komplett program från början till slut
- Arbeta med arrayer och objekt på ett praktiskt sätt
- Hur loopar används för att upprepa logik
- User experience genom tydlig feedback och formatering

## 📝 Licens

Detta är ett utbildningsprojekt skapat för övning i JavaScript och Node.js.

## 🙏 Tack till

- **EC Utbildning** - För Backend-utvecklings kursen
- **Claude AI** - För vägledning och förklaringar under utvecklingen
- **readline-sync** - För att göra terminal-input enkelt

---

*Skapad som en del av Backend-utveckling 1 kursen hos EC Utbildning*