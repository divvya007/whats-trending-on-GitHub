function List(mainContainer) {
  this.listEl = document.createElement("div");
  this.boxHead = document.createElement("div");
  this.boxHead.className = "listEl__box-header";
  //   div for language
  this.language = document.createElement("div");
  this.language.className = "listEl__box-header__language";
  this.language.className = "listEl__box-header__language--gray";
  this.language.innerText = "filter language: ";
  //   span for btn
  this.btnSpan = document.createElement("span");
  this.btnSpan.className = "listEl__boxHeader__langugae__span";
  this.language.append(this.btnSpan);
  //   drop down btn
  this.dropDownBtn = document.createElement("button");
  this.dropDownBtn.className =
    "listEl__boxHeader__langugae__span__drop-down-btn--gray";
  this.dropDownBtn.className =
    "listEl__boxHeader__langugae__span__drop-down-btn";
  this.dropDownBtn.innerText = "Any";
  this.btnSpan.append(this.dropDownBtn);

  this.boxHead.append(this.language);
  this.listEl.append(this.boxHead);
  this.listEl.className = "listElDiv";
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
