export const menuPageLoad = document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("ok");

    const menuItems = [
      {
        title: "Udon Stir Fry",
        description:
          "A hearty stir fry made with a variety of seasonal fresh vegetables in Ketsup Manis Sauce with Udon and a choice of plant-based chicken or tofu.",
        imgURL:
          "https://christieathome.com/wp-content/uploads/2020/10/301DEA1C-A792-4A96-8E0F-54AD6B66BA27-scaled.jpg",
      },
      {
        title: "The Farmers Choice",
        description:
          "Creamy mashed potatoes with a plant-based, crispy coated Schnitzel, served with a red-wine mushroom gravy and a side salad.",
        imgURL:
          "https://inghams.com.au/wp-content/uploads/2023/06/0613_FS_Foodservice_Recipes_Website_Schnitzel_St3_V1.jpg",
      },
    ];

    const content = document.getElementById("content");
    const body = document.querySelector("body");

    // Headline
    const headline = document.createElement("h2");
    headline.textContent = "Menu";

    // Menu Intro

    const menuIntro = document.createElement("p");
    menuIntro.textContent =
      "The Good Old Kitchen's Menu varies every week and the dish of the day varies. We try our best to make our dishes seasonal but let's face it, sometimes you just gotta chuck a frozen pizza in the oven and call it a day. Below you will find a list of frequent dishes of the day.";

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
