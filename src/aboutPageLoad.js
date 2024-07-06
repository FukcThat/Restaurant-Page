export const aboutPageLoad = () => {
  const aboutPageDiv = document.createElement("div");
  aboutPageDiv.classList.add("aboutPage");

  // Headline
  const headline = document.createElement("h2");
  headline.textContent = "About The Good Old Kitchen";

  // First paragraph
  const p1 = document.createElement("p");
  p1.textContent =
    "The Good Old Kitchen was first opened in 2017, after a renovation of the apartment it is located in. It has since catered to a stady customer base of the owner's friends and family. The Good Old Kitchen is not currently open to the public, nor does it plan to ever be.";

  // Second paragraph
  const p2 = document.createElement("p");
  p2.textContent =
    "The culinary expierience ranges from traditional german cuisine, over east-european, south-east asian and Indian to American and incorporates fresh vegetables amlost every day.";

  aboutPageDiv.appendChild(headline);
  aboutPageDiv.appendChild(p1);
  aboutPageDiv.appendChild(p2);

  return aboutPageDiv;
};
