function List(mainContainer) {
  this.listEl = document.createElement("div");
  this.listEl.className = "listElDiv";
  this.trendingDataList = [];
  this.contentMenuArray = [];
  mainContainer.append(this.listEl);
}

List.prototype = {
  discoverTrend: function (dataElements) {
    this.trendingDataList = dataElements.map((dataItem) => {
      this.contentMenuArray.push(dataItem.language);
      return new RepoItems(this.listEl, dataItem);
    });
  },
};
