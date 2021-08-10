function RepoItems(containerEl, dataItems) {
  //   console.log(menuContent);
  // article tag for repoItems
  this.repoContainer = document.createElement("article");
  this.repoContainer.className = "repoContainer--style";

  //  container for head, para description, repoBasicInfo
  this.headParaRepoContainer = document.createElement("div");
  this.headParaRepoContainer.className = "article__head-para-repo-container";
  this.repoContainer.append(this.headParaRepoContainer);

  //   head tag
  this.repoHead = document.createElement("h4");
  this.repoHead.id = "Head__big";
  this.repoHead.className = "repoHead--blue";
  this.headParaRepoContainer.append(this.repoHead);

  //  anchor tag for adding link
  this.repoHeadLink = document.createElement("a");
  this.repoHeadLink.innerText = dataItems.full_name;
  this.repoHeadLink.href = dataItems.html_url;

  this.repoHead.append(this.repoHeadLink);

  // para tag for description
  this.repoDescription = document.createElement("p");
  this.repoDescription.className = "repo__description";
  this.repoDescription.className = "repo__description--white";

  if (dataItems.description === null) {
    this.repoDescription.style.display = " ";
  } else {
    this.repoDescription.innerText = dataItems.description;
  }

  this.headParaRepoContainer.append(this.repoDescription);

  //repo basic info for language, star,fork
  this.repoBasicInfo = document.createElement("div");
  this.repoBasicInfo.className = "repoBasicInfo--white";
  this.language = document.createElement("span");

  if (dataItems.language === null) {
    this.language.style.display = "none";
  } else {
    this.language.innerText = dataItems.language;
  }

  this.repoBasicInfo.append(this.language);

  // total stars <a> tag  and its icon
  this.starContainer = document.createElement("span");
  this.starContainer.className = "starContainer--gray";
  if (dataItems.language === null) {
    this.starContainer.style.display = "padding:0px";
  } else {
    this.starContainer.style = "padding:20px";
  }
  this.starsIcon = document.createElement("i");
  this.starsIcon.innerHTML = '<i class="far fa-star"></i>';
  this.starContainer.append(this.starsIcon);

  this.totalStars = document.createElement("a");
  this.totalStars.id = "totalStars--gray";
  this.totalStars.className = "totalStars--style";
  this.totalStars.style = "padding:4px";
  this.totalStars.innerHTML = dataItems.stargazers_count;
  this.totalStars.href = "https://github.com/sysprog21/lkmpg/stargazers";
  this.starContainer.append(this.totalStars);
  this.repoBasicInfo.append(this.starContainer);

  // adding fork icon
  this.forkIconContainer = document.createElement("span");
  this.forkIconContainer.className = "forkIconContainer--style-size";
  this.repoBasicInfo.append(this.forkIconContainer);
  this.forkIcon = document.createElement("i");
  this.forkIcon.innerHTML = '<i class="fas fa-code-branch"></i>';
  this.forkIconContainer.append(this.forkIcon);

  //   fork count
  this.forkCount = document.createElement("a");
  this.forkCount.style = "padding:4px";
  this.forkCount.innerHTML = dataItems.forks_count;
  this.forkIconContainer.append(this.forkCount);
  this.headParaRepoContainer.append(this.repoBasicInfo);

  // icon localStorageStar
  this.localStar = document.createElement("div");
  this.localStar.className = "localStar__container";

  //   span
  this.localStarSpan = document.createElement("span");
  this.localStarIcon = document.createElement("i");
  this.localStarIcon.innerHTML = '<i class="far fa-star"></i>';
  this.localStarSpan.innerText = "Star";

  this.localStarSpan.append(this.localStarIcon);
  this.localStar.append(this.localStarSpan);
  this.repoContainer.append(this.localStar);

  containerEl.append(this.repoContainer);
}
