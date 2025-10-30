import { question } from "readline-sync";

function prompt(text) {
         return question(text);
}

// # Bonusövning
// Gör ett Quiz spel
// Det här spelet är ett islam-quiz med lite rolig fakta som kanske inte alla vet om

// Array med alla frågor, alternativ, svar och förklaring
const questions = [
    {
        question: "Vad betyder ordet 'Jihad' egentligen på arabiska?",
        options: ["A) Heligt krig", "B) Kamp/ansträngning", "C) Bön", "D) Fasta"],
        correctAnswer: "B",
        explanation: "Jihad betyder 'kamp' eller 'ansträngning' och syftar oftast på den inre kampen mot sina egna svagheter."
    },
    {
        question: "Hur många gånger nämns ordet 'dag' (yawm) i singular i Quranen?",
        options: ["A) 100 gånger", "B) 365 gånger", "C) 500 gånger", "D) 12 gånger"],
        correctAnswer: "B",
        explanation: "Ordet 'dag' i singular förekommer 365 gånger - samma antal som dagar på ett år!"
    },
    {
        question: "Hur många gånger nämns ordet 'månad' (shahr) i Quranen?",
        options: ["A) 12 gånger", "B) 30 gånger", "C) 5 gånger", "D) 7 gånger"],
        correctAnswer: "A",
        explanation: "Ordet 'månad' nämns exakt 12 gånger - samma antal månader på ett år!"
    },
    {
        question: "Vilken profet nämns flest gånger i Quranen?",
        options: ["A) Muhammad", "B) Adam", "C) Musa (Moses)", "D) Ibrahim (Abraham)"],
        correctAnswer: "C",
        explanation: "Musa (Moses) nämns över 130 gånger, fler än någon annan profet i Quranen!"
    },
    {
        question: "Hur många pelare (grundläggande principer) finns det i Islam?",
        options: ["A) 3", "B) 5", "C) 7", "D) 10"],
        correctAnswer: "B",
        explanation: "Det finns 5 pelare: Shahadah (trosbekännelse), Salat (bön), Zakat (välgörenhet), Sawm (fasta), Hajj (pilgrimsfärd)."
    },
    {
        question: "Hur lång tid tog det att uppenbara Quranen till profeten Muhammad?",
        options: ["A) 10 år", "B) 23 år", "C) 5 år", "D) 40 år"],
        correctAnswer: "B",
        explanation: "Quranen uppenbarades gradvis under 23 år, från år 610 till 632 e.Kr."
    },
    {
        question: "Hur många gånger om dagen ber muslimer obligatoriskt?",
        options: ["A) 3 gånger", "B) 5 gånger", "C) 7 gånger", "D) 2 gånger"],
        correctAnswer: "B",
        explanation: "Muslimer ber 5 gånger om dagen: Fajr, Dhuhr, Asr, Maghrib och Isha."
    },
    {
        question: "Vad jämför Quranen berg med, något som modern geologi nu bekräftat stämmer?",
        options: ["A) Träd med rötter", "B) Pålar/tältpinnar", "C) Ankare", "D) Torn"],
        correctAnswer: "B",
        explanation: "Quranen jämför berg med 'awtad' (pålar/pinnar) i Surah An-Naba 78:7. Modern geologi har upptäckt att berg har djupa rötter under jordskorpan som stabiliserar den - precis som tältpinnar!"
    },
    {
        question: "Berättelsen om 'Ashab al-Kahf' i Surah Al-Kahf inspirerade ett svenskt uttryck. Vilket?",
        options: ["A) Morgonpigg", "B) Nattugglа", "C) Sjusovare", "D) Dagdrömmare"],
        correctAnswer: "C",
        explanation: "Historien om de unga männen som sov i en grotta i 309 år (Ashab al-Kahf) är ursprunget till det svenska uttrycket 'sjusovare' - någon som sover länge!"
    },
    {
        question: "Hur många gånger nämns orden 'hav' (bahr) och 'land' (barr) tillsammans i Quranen?",
        options: ["A) 50 gånger totalt", "B) 71 gånger totalt", "C) 100 gånger totalt", "D) 365 gånger totalt"],
        correctAnswer: "B",
        explanation: "Ordet 'hav' nämns 32 gånger och 'land' 13 gånger = totalt 45 gånger. Intressant är att 32/45 = 71% hav och 13/45 = 29% land - exakt samma som jordens faktiska sammansättning!"
    }
]

// FUNCTION: Huvudfunktionen för quizet ---------------------------------------------
function startQuiz() {
    // Välkomstmeddelande
    console.log("----------------------------------");
    console.log("---VÄLKOMMEN TILL ISLAM QUIZET!---");
    console.log("----------------------------------");
    console.log("----Svara med A, B, C eller D-----");
    console.log("");

    // Räkna poäng
    let score = 0;

    // Loopa genom alla frågor
    for (let i = 0; i < questions.length; i++) {
        // Hämta den aktuella frågan
        const q = questions[i];

        console.log(`\n--- FRÅGA ${i + 1} av ${questions.length} ---`);
        console.log(q.question); // Visa frågan

        // Visa svarsalternativen
        for (let j = 0; j < q.options.length; j++) {
            console.log(q.options[j]);
        }

        // Hämta användarens svar
        let userAnswer = prompt("\nDitt svar: ");
        userAnswer = userAnswer.toUpperCase();

        if (userAnswer === q.correctAnswer) {
            // Rätt svar
            console.log("✅ RÄTT!");
            console.log(q.explanation);
            score++; // Öka poängen med 1
        } else {
            // Fel svar
            console.log("❌ FEL!");
            console.log(`Rätt svar var: ${q.correctAnswer}`);
            console.log(q.explanation);
        }
    }

    // När alla frågor är besvarade, visa slutresultatet
    console.log("\n----------------------------------");
    console.log("--------- QUIZ AVSLUTAT! ---------");
    console.log("----------------------------------");
    console.log(`---Du fick ${score} av ${questions.length} rätt!---`);

    const percentage = (score / questions.length) * 100; // Räkna ut procent för lite rolig feedback

    if (percentage === 100) {
        console.log("🌟 PERFEKT! Masha'Allah!");
    } else if (percentage >= 80) {
        console.log("🎉 Mycket bra! Du kan verkligen det här!");
    } else if (percentage >= 60) {
        console.log("👍 Bra jobbat! Fortsätt lära dig mer!");
    } else if (percentage >= 40) {
        console.log("📚 Inte illa! Läs gärna mer och försök igen!");
    } else {
        console.log("💪 Fortsätt öva! Kunskap kommer med tid!");
    }
}

// Starta quizet ---------------------------------------------
startQuiz();