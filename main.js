(()=>{"use strict";const e=()=>{const e=document.createElement("div");e.classList.add("homePage");const t=document.createElement("h2");t.textContent="The Good Old Kitchen";const n=document.createElement("p");n.textContent="The Good Old Kitchen is not really so much a restaurant as it is my kitchen. It is the welcoming refuge for all munchies. Meals, snacks, beverages and even treats can be made here. Meals are usually prepared once to twice a day. Self service available, provided you live shere.";const o=document.createElement("p");return o.classList.add("smallText"),o.textContent="The Good Old Kitchen will hold all self service users responsible for restocking of emptied goods. Or so help me God...",e.appendChild(t),e.appendChild(n),e.appendChild(o),e},t=document.querySelector("#content");t.appendChild(e()),document.querySelector("#homeBtn").addEventListener("click",(()=>{t.innerHTML="",t.appendChild(e())})),document.querySelector("#menuBtn").addEventListener("click",(()=>{t.innerHTML="",t.appendChild((()=>{const e=document.createElement("div");e.classList.add("menuPage");const t=[{title:"Udon Stir Fry",description:"A hearty stir fry made with a variety of seasonal fresh vegetables in Ketsup Manis Sauce with Udon and a choice of plant-based chicken or tofu.",imgURL:"https://christieathome.com/wp-content/uploads/2020/10/301DEA1C-A792-4A96-8E0F-54AD6B66BA27-scaled.jpg"},{title:"The Farmers Choice",description:"Creamy mashed potatoes with a plant-based, crispy coated Schnitzel, served with a red-wine mushroom gravy and a side salad.",imgURL:"https://inghams.com.au/wp-content/uploads/2023/06/0613_FS_Foodservice_Recipes_Website_Schnitzel_St3_V1.jpg"},{title:"Frozen Pizza",description:"Dr. Oetkers frozen Pizza.",imgURL:"data:image/jpeg;base64,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"}],n=document.createElement("h2");n.textContent="Menu";const o=document.createElement("p");o.textContent="The Good Old Kitchen's Menu varies every week and the dish of the day varies. We try our best to make our dishes seasonal but let's face it, sometimes you just gotta chuck a frozen pizza in the oven and call it a day. Below you will find a list of frequent dishes of the day.";const A=(e,t,n)=>{const o=document.createElement("div");o.classList.add("menuItem");const A=document.createElement("h4");A.textContent=e,o.appendChild(A);const a=document.createElement("p");a.textContent=t,o.appendChild(a);const c=document.createElement("img");return c.src=n,o.appendChild(c),o};for(let e=0;e<t.length;e++)content.appendChild(A(t[e].title,t[e].description,t[e].imgURL));return e.appendChild(n),e.appendChild(o),e.appendChild(A()),e})())})),document.querySelector("#aboutBtn").addEventListener("click",(()=>{t.innerHTML="",t.appendChild((()=>{const e=document.createElement("div");e.classList.add("aboutPage");const t=document.createElement("h2");t.textContent="About The Good Old Kitchen";const n=document.createElement("p");n.textContent="The Good Old Kitchen was first opened in 2017, after a renovation of the apartment it is located in. It has since catered to a stady customer base of the owner's friends and family. The Good Old Kitchen is not currently open to the public, nor does it plan to ever be.";const o=document.createElement("p");return o.textContent="The culinary expierience ranges from traditional german cuisine, over east-european, south-east asian and Indian to American and incorporates fresh vegetables amlost every day.",e.appendChild(t),e.appendChild(n),e.appendChild(o),e})())}))})();