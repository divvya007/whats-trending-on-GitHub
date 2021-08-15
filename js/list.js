function List(listContainer) {
  this.trendingDataList = [];
  this.contentMenuArray = [];
  this.listContainer = listContainer;
}

List.prototype = {
  discoverTrend: function (dataElements) {
    this.trendingDataList = dataElements.map((dataItem) => {
      this.contentMenuArray.push(dataItem.language);
      return new RepoItems(this.listContainer, dataItem);
    });
  },
};
