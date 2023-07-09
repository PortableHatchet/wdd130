function getRandomLineFromFile(fileUrl) {
  var githubApiUrl = 'https://api.github.com/repos/';
  var repoOwner = 'PortableHatchet';
  var repoName = 'wdd130';
  var filePath = 'wdd130/random_facts/facts.txt';
  var url = githubApiUrl + repoOwner + '/' + repoName + '/contents/' + filePath;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var response = JSON.parse(this.responseText);
      var content = atob(response.content);
      var lines = content.split('\n');
      var randomLine = lines[Math.floor(Math.random() * lines.length)];
      document.getElementById('output').textContent = randomLine;
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}