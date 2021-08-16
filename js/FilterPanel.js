function FilterPanel(onFilter) {
	this.languageMenu = document.getElementById("language-menu");
	this.dropDownBtn = document.getElementById("language-menu-button");
	this.onFilter = onFilter;
	this.dropDownBtn.addEventListener("click", this.handleOnButtonClick.bind(this));

	window.addEventListener("click", this.handleOnWindowClick.bind(this));
}

FilterPanel.prototype = {
	handleOnWindowClick: function () {
		if (this.languageMenu.classList.contains("dashboard__languageMenu--visible")) {
			this.languageMenu.classList.remove("dashboard__languageMenu--visible");
			this.languageMenu.classList.add("dashboard__languageMenu--hidden");
		}
	},

	handleOnButtonClick: function (event) {
		if (this.languageMenu.classList.contains("dashboard__languageMenu--hidden")) {
			this.languageMenu.classList.remove("dashboard__languageMenu--hidden");
			this.languageMenu.classList.add("dashboard__languageMenu--visible");
		} else {
			this.languageMenu.classList.remove("dashboard__languageMenu--visible");
			this.languageMenu.classList.add("dashboard__languageMenu--hidden");
		}
		event.stopPropagation();
	},

	populate: function (repositories) {
		const contentMenuArray = repositories.map((repository) => repository.language);

		const languageList = uniqueItems(contentMenuArray);
		for (let language of languageList) {
			const menuItem = document.createElement("p");
			menuItem.className = "btn-container__menu-content";
			menuItem.append(language);
			menuItem.addEventListener("click", () => {
				this.handleOnLanguageClick(language);
			});
			this.languageMenu.append(menuItem);
		}
	},

	handleOnLanguageClick: function (language) {
		this.dropDownBtn.innerText = language;
		this.onFilter(language);
	}
}