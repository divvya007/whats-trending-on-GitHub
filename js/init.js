(function () {
  const list = new List(document.getElementById("repository-list"));
  const filterPanel = new FilterPanel();
  fetch(
    "https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc"
  )
    .then((response) => response.json())
    .then((data) => {
      list.discoverTrend(data.items);
      filterPanel.populate(data.items);
    });
})();
