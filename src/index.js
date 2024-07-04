import { homePageLoad } from "./homePageLoad";
import { menuPageLoad } from "./menuPageLoad";
import { aboutPageLoad } from "./aboutPageLoad";

// Display HomePage by default, hide Menu and About

const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener("click", () => {});

// Onclick Menu hide HomePage and About Page, display Menu

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", () => {});

// Onclick About hide HomePage and Menu, display About

const aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", () => {});
