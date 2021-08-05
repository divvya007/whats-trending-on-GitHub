(function () {
  const list = new List(document.getElementById("outer-div"));
  fetch(
    "https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc"
  )
    .then((response) => response.json())
    .then((data) => {
      list.discoverTrend(data.items);
    });
})();
