export const homePageLoad = document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("ok");

    const content = document.getElementById("content");
    const body = document.querySelector("body");

    // Headline
    const headline = document.createElement("h2");
    headline.textContent = "The Good Old Kitchen";

    // First paragraph
    const p1 = document.createElement("p");
    p1.textContent =
      "The Good Old Kitchen is not really so much a restaurant as it is my kitchen. It is the welcoming refuge for all munchies. Meals, snacks, beverages and even treats can be made here. Meals are usually prepared once to twice a day. Self service available, provided you live shere.";

    // Second paragraph
    const finePrint = document.createElement("p");
    finePrint.classList.add("smallText");
    finePrint.textContent =
      "The Good Old Kitchen will hold all self service users responsible for restocking of emptied goods. Or so help me God...";

    content.appendChild(headline);
    content.appendChild(p1);
    content.appendChild(finePrint);
    body.appendChild(content);
  }
);
