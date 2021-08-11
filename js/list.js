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

  //   btn
  this.dropDownBtn = document.createElement("button");
  this.dropDownBtn.className =
    "listEl__boxHeader__langugae__span__drop-down-btn--gray";
  this.dropDownBtn.className =
    "listEl__boxHeader__langugae__span__drop-down-btn";
  this.dropDownBtn.innerText = "Any";
  this.btnSpan.append(this.dropDownBtn);

  // div for drop down menu
  this.dropDownMenuContainer = document.createElement("div");
  this.dropDownMenuContainer.className = "btn__btn-container";
  this.btnSpan.append(this.dropDownMenuContainer);

  this.boxHead.append(this.language);
  this.listEl.append(this.boxHead);
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

  dropDownLanguage: function () {
    const languageList = uniqueItems(this.contentMenuArray);
    for (let i = 0; i < languageList.length; i++) {
      this.menuContent = document.createElement("p");
      this.menuContent.className = "btn-container__menu-content";
      this.menuContent.append(languageList[i]);
      this.dropDownMenuContainer.append(this.menuContent);
    }

    this.dropDownMenuContainer.style.display = "none";

    this.dropDownBtn.addEventListener("click", myBtn.bind(this));
    function myBtn() {
      if (this.dropDownMenuContainer.style.display !== "block") {
        this.dropDownMenuContainer.style.display = "block";
      } else if (this.dropDownMenuContainer.style.display === "block") {
        this.dropDownMenuContainer.style.display = "none";
      }
    }
  },
};
