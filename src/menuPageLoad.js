export const menuPageLoad = document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("ok");

    const content = document.getElementById("content");
    const body = document.querySelector("body");

    // Headline
    const headline = document.createElement("h2");
    headline.textContent = "Menu";

    // Menu Item

    const createMenuItem = () => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menuItem");

      // MenuItem Title
      const menuItemTitle = document.createElement("h4");
      menuItemTitle.textContent = "A tasty Thing";
      menuItem.appendChild(menuItemTitle);

      // MenuItem Description
      const menuItemDesc = document.createElement("p");
      menuItemDesc.textContent = "A tasty thing you might eat or drink.";
      menuItem.appendChild(menuItemDesc);

      // Menu Image
      const menuItemImg = document.createElement("image");
      menuItem.appendChild(menuItemImg);

      return menuItem;
    };

    content.appendChild(headline);
    content.appendChild(createMenuItem());
    body.appendChild(content);
  }
);
