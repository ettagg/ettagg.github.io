function submit() {
    // Get the selected values from each dropdown
    var dateIdeaSelect = document.getElementById("options1");
    var timeSelect = document.getElementById("options2");
    var communicationSelect = document.getElementById("options3");

    // Get the selected text of each dropdown
    var dateIdeaText = dateIdeaSelect.options[dateIdeaSelect.selectedIndex].text;
    var timeText = timeSelect.options[timeSelect.selectedIndex].text;
    var communicationText = communicationSelect.options[communicationSelect.selectedIndex].text;

    // Store the selected values in localStorage
    localStorage.setItem("dateIdea", dateIdeaText);
    localStorage.setItem("time", timeText);
    localStorage.setItem("communication", communicationText);

    // Redirect to the results page
    window.location.href = "results.html";
}
