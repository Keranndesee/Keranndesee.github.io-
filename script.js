
// BOUTON PRINCIPAL

const uselessBtn = document.getElementById("uselessBtn");
const message = document.getElementById("message");
const counter = document.getElementById("counter");

let clicks = 0;

const messages = [
    "Félicitations. Il ne s'est rien passé.",
    "Tu pensais vraiment qu'il allait se passer quelque chose ?",
    "C'était un clic très important. Enfin, pas vraiment.",
    "Succès débloqué : Perte de temps professionnelle.",
    "Le bouton apprécie ton dévouement.",
    "Objectif introuvable.",
    "Ce clic était pas mal, contrairement au précédent.",
    "Arrête s'il te plaît. Enfin, non, continue.",
    "Personne serait vraiment fier de toi pour ça tu le sais bien ?",
    "Bah à un moment faudrait vraiment penser à arrêter je t'avoue quand même...",
    "Il va vraiment rien se passer tu sais ?",
    "J'espère que t'as bu de l'eau parce que ça risque d'être long...",
    "J'espère qu'au moins tu te sens plus utile qu'au quotidien...",
    "Tu continues de cliquer ? On t'aime quand même hein...",
    "Le bouton a un message : Tu forces.",
    "Normalement tu as vite fait le tour pourquoi t'es encore là ?",
    "Pas ouf, recommence pour voir ?"
];

uselessBtn?.addEventListener("click", () => {
    clicks++;

    counter.textContent = String(clicks).padStart(4, "0");

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    message.textContent = randomMessage;
});


// GÉNÉRATEUR D'EXCUSES

const excuses = [
    "Mon Wi-Fi était émotionnellement indisponible.",
    "Un pigeon m'a volé ma motivation.",
    "J'étais occupé à rien faire.",
    "Mon ordinateur avait besoin de vacances.",
    "Mon chat a mangé ma productivité.",
    "J'ai oublié comment fonctionner.",
    "L'univers a dit non.",
    "Bah euh fin ouais nan je ouais nan",
    "Demain demain",
    "Les astres étaient pas alignés",
    "Dieu voulait pas",
    "Je me suis cassé un neurone"
];

document.getElementById("excuseBtn")?.addEventListener("click", () => {
    const random = Math.floor(Math.random() * excuses.length);

    document.getElementById("excuseResult").textContent =
        excuses[random];
});


// TEST D'EXISTENCE

document.getElementById("existBtn")?.addEventListener("click", () => {
    document.getElementById("existResult").textContent =
        "STATUT : Vivant. Objectif : Aucun. Mais au moins t'es là c'est déjà ça ^^'";
});


// CHARGER LE NÉANT

const loadingBtn = document.getElementById("loadingBtn");
const progressBar = document.getElementById("progressBar");
const loadingResult = document.getElementById("loadingResult");

loadingBtn?.addEventListener("click", () => {

    let progress = 0;

    loadingBtn.disabled = true;
    progressBar.style.width = "0%";
    loadingResult.textContent = "Chargement du néant en cours...";

    const interval = setInterval(() => {

        progress += 10;

        progressBar.style.width = progress + "%";

        if (progress >= 100) {

            clearInterval(interval);

            loadingResult.textContent =
                "Rien n'a été trouvé. Je t'avais prévenu...";

            loadingBtn.disabled = false;
        }

    }, 200);

});
