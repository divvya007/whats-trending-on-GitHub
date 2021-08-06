function List(mainContainer) {
  this.listEl = document.createElement("div");
  this.listEl.className = "listElDiv__flexProp";
  this.trendingDataList = [];
  mainContainer.append(this.listEl);
}

List.prototype = {
  discoverTrend: function (dataElements) {
    this.trendingDataList = dataElements.map((dataItem) => {
      console.log(dataItem);
      return new RepoItems(this.listEl, dataItem);
    });
  },
};
