function answerMe() {
    document.getElementById("answer").innerHTML = Date();
  }
document.getElementById("ysBtn").addEventListener("answer", answerMe);
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });
