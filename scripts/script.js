function goHome() {
    hideAllSections();
    document.getElementById("subjectSelection").style.display = "block";
}

function goBack() {
    history.back();  // Go to the previous section
}

function hideAllSections() {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });
}

function selectSubject(subject) {
    hideAllSections();
    document.getElementById("subjectTitle").textContent = subject;
    document.getElementById("categorySelection").style.display = "block";
}

function selectCategory(category) {
    hideAllSections();
    document.getElementById("categoryTitle").textContent = category;
    document.getElementById("topicSelection").style.display = "block";
}

function selectTopic(topic) {
    hideAllSections();
    document.getElementById("topicTitle").textContent = topic;
    document.getElementById("subtopicSelection").style.display = "block";
}

function selectSubtopic(subtopic) {
    hideAllSections();
    document.getElementById("sortSelection").style.display = "block";
}

function sortWorksheets(sortBy) {
    hideAllSections();
    document.getElementById("worksheetsDisplay").style.display = "block";
}

function showWorksheet(title) {
    hideAllSections();
    document.getElementById("worksheetTitle").textContent = title;
    document.getElementById("expandedWorksheet").style.display = "block";
}

function showExplanation() {
    alert("Explanation feature coming soon!");
}

// Start by showing the home screen
goHome();
