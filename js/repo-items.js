function RepoItems(containerEl, dataItems) {
  // article tag for repoItems
  this.repoContainer = document.createElement("article");
  this.repoContainer.className = "repoContainer--style";
  //   head tag
  this.repoHead = document.createElement("h4");
  this.repoContainer.append(this.repoHead);
  //  anchor tag for adding link
  this.repoHeadLink = document.createElement("a");
  this.repoHeadLink.innerText = dataItems.full_name;
  this.repoHeadLink.href = dataItems.html_url;

  this.repoHead.append(this.repoHeadLink);

  // para tag for description

  this.repoDescription = document.createElement("p");

  this.repoDescription.className = "repo__description";
  this.repoDescription.innerText = dataItems.description;

  this.repoContainer.append(this.repoDescription);

  this.repoBasicInfo = document.createElement("div");
  //   here problem
  //   this.repoContainer.append(this.repoBasicInfo);
  this.language = document.createElement("span");
  this.language = dataItems.language;
  this.repoBasicInfo.append(this.language);

  // total stars <a> tag
  //   and its icon
  this.starContainer = document.createElement("span");
  this.starContainer.style = "padding:20px";
  //   this.starContainer.innerHTML =
  //     '<i class="far fa-star" aria-hidden="true"></i>';
  this.starsIcon = document.createElement("i");
  this.starsIcon.innerHTML = '<i class="far fa-star"></i>';
  this.starContainer.append(this.starsIcon);
  //   this.starContainer.append(this.starsIcon);

  this.totalStars = document.createElement("a");
  this.totalStars.style = "padding:4px";
  this.totalStars.innerHTML = dataItems.stargazers_count;
  //   this.totalStars.innerText = " total stars ";
  this.totalStars.href = "https://github.com/sysprog21/lkmpg/stargazers";
  this.starContainer.append(this.totalStars);

  //   this.repoBasicInfo.append(this.totalStars);
  // problem
  this.repoBasicInfo.append(this.starContainer);
  //   this.starContainer.append(this.starContainer);
  this.repoContainer.append(this.repoBasicInfo);

  containerEl.append(this.repoContainer);
}
