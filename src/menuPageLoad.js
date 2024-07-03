export const menuPageLoad = document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("ok");

    const menuItems = [
      {
        title: "Dish1",
        description: "Something tasty.",
        imgURL:
          "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
      },
      {
        title: "Dish2",
        description: "Something tasty also.",
        imgURL: "https://ichef.bbci.co.uk/images/ic/480xn/p07ryyyj.jpg.webp",
      },
    ];

    const content = document.getElementById("content");
    const body = document.querySelector("body");

    // Headline
    const headline = document.createElement("h2");
    headline.textContent = "Menu";

    // Menu Item

    const createMenuItem = (title, description, imgURL) => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menuItem");

      // MenuItem Title
      const menuItemTitle = document.createElement("h4");
      menuItemTitle.textContent = title;
      menuItem.appendChild(menuItemTitle);

      // MenuItem Description
      const menuItemDesc = document.createElement("p");
      menuItemDesc.textContent = description;
      menuItem.appendChild(menuItemDesc);

      // Menu Image
      const menuItemImg = document.createElement("img");
      menuItemImg.src = imgURL;
      menuItem.appendChild(menuItemImg);

      return menuItem;
    };

    content.appendChild(headline);

    for (let i = 0; i < menuItems.length; i++) {
      content.appendChild(
        createMenuItem(
          menuItems[i].title,
          menuItems[i].description,
          menuItems[i].imgURL
        )
      );
    }

    body.appendChild(content);
  }
);
