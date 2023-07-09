function getRandomLineFromFile(fileUrl) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var lines = this.responseText.split('\n');
      var randomLine = lines[Math.floor(Math.random() * lines.length)];
      document.getElementById('output').textContent = randomLine;
    }
  };
  xhttp.open('GET', fileUrl, true);
  xhttp.send();
}