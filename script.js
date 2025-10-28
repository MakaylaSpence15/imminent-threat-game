
const scenarios = [
    { text: "Customer emails a threat to harm a dealership.", audio: "email_threat.mp3", correct: ["Notify Team Leader", "Call GSIC", "Fill out Imminent Threat Form"] },
    { text: "Caller expresses suicidal thoughts.", audio: "suicidal_caller.mp3", correct: ["Notify Team Leader", "Call GSIC", "Fill out Imminent Threat Form"] },
    { text: "Message contains abusive language but no direct threat.", audio: "abusive_language.mp3", correct: ["Notify Team Leader"] },
    { text: "Dealership reports concerning customer behavior.", audio: "concerning_behavior.mp3", correct: ["Notify Team Leader", "Notify Site Security"] },
    { text: "Customer threatens to return with a weapon.", audio: "weapon_threat.mp3", correct: ["Notify Team Leader", "Call GSIC", "Notify Site Security", "Fill out Imminent Threat Form"] },
    { text: "Threatening social media posts.", audio: "social_media_threat.mp3", correct: ["Notify Team Leader", "Call GSIC", "Fill out Imminent Threat Form"] },
    { text: "Vague threats during a phone call.", audio: "vague_phone_threat.mp3", correct: ["Notify Team Leader", "Call GSIC"] },
    { text: "Threatening letter received.", audio: "threatening_letter.mp3", correct: ["Notify Team Leader", "Call GSIC", "Fill out Imminent Threat Form"] }
];

const actions = ["Notify Team Leader", "Notify Site Security", "Call GSIC", "Fill out Imminent Threat Form", "Gather customer info"];
let currentScenario = null;

function startGame() {
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    currentScenario = scenario;
    document.getElementById("scenario").innerHTML = `<p><strong>Scenario:</strong> ${scenario.text}</p><audio controls src="${scenario.audio}"></audio>`;
    const actionsDiv = document.getElementById("actions");
    actionsDiv.innerHTML = "<p>Select actions:</p>";
    actions.forEach(action => {
        actionsDiv.innerHTML += `<label><input type="checkbox" value="${action}"> ${action}</label><br>`;
    });
    actionsDiv.innerHTML += `<button onclick="submitActions()">Submit</button>`;
    document.getElementById("feedback").innerHTML = "";
}

function submitActions() {
    const selected = Array.from(document.querySelectorAll("#actions input:checked")).map(cb => cb.value);
    const correct = currentScenario.correct;
    const missed = correct.filter(action => !selected.includes(action));
    const unnecessary = selected.filter(action => !correct.includes(action));
    let feedback = `<p><strong>Feedback:</strong></p>`;
    feedback += `<p>Correct actions: ${correct.join(", ")}</p>`;
    feedback += `<p>Missed actions: ${missed.join(", ")}</p>`;
    feedback += `<p>Unnecessary actions: ${unnecessary.join(", ")}</p>`;
    document.getElementById("feedback").innerHTML = feedback;
}
