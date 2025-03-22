document.getElementById("openTerms").addEventListener("click", function() {
    document.getElementById("termsBox").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("termsBox").style.display = "none";
});

document.getElementById("reportBtn").addEventListener("click", function() {
    alert("Report submitted. Our team will review it soon.");
});