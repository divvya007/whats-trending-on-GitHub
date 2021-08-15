(function () {
  let repoData = null;
  function handleOnFilter(language) {
    list.discoverTrend(repoData.items.filter((item) => item.language === language));
  }

  const list = new List(document.getElementById("repository-list"));
  const filterPanel = new FilterPanel(handleOnFilter);
  fetch(
    "https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc"
  )
    .then((response) => response.json())
    .then((data) => {
      repoData = data;
      list.discoverTrend(data.items);
      filterPanel.populate(data.items);
    });
})();
