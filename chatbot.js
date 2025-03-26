const aibtn = document.querySelector(".ai-button");
const chatcontainer = document.querySelector(".chat-container");
const chatbody = document.querySelector(".chat-body");
const botmess = document.querySelector(".bot-message");
const input = document.querySelector("#user-input");
const sendbutton = document.querySelector(".ai-send");
const closedbtn = document.querySelector(".close-btn");


const loadingdiv = document.createElement("p");
    loadingdiv.classList.add("loadings");
    loadingdiv.innerText = "Loading...";

import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai";

const md = window.markdownit();
const genAI = new GoogleGenerativeAI("AIzaSyCOvpHjXHnw00Ecn6ps6M0gUTLnJ5rDqgQ");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
// Load cache from localStorage when the page loads
let geminiCache = JSON.parse(localStorage.getItem("geminiCache")) || {};
async function runGimini(query) {
    loadingdiv.style.display = "block";
    if (query === "") {
   
      return;
    }
    const usermesssage = document.createElement("p");
    usermesssage.classList.add("usermess");  
    usermesssage.innerText = `${query}`;
    chatbody.append(usermesssage);
    // Check cache first
    if (geminiCache[query]) {
      console.log("Fetching from cache...");
  
  
      displayGeminiData(geminiCache[query]);
      return;
    }
    
    botmess.style.display = "none";
    chatbody.append(loadingdiv);
  
    try {
        
      const result = await model.generateContent(query);
      const text = result.response.candidates[0].content.parts[0].text;
  
  
      // Cache the result in memory and localStorage
      geminiCache[query] = text;
      localStorage.setItem("geminiCache", JSON.stringify(geminiCache));
  
  
      displayGeminiData(text);
    } catch (error) {
        
        loadingdiv.remove();
        const errordiv = document.createElement("p");
         errordiv.innerText = "error...";
      console.error("Error fetching data:", error);
      
    }
  }
function displayGeminiData(text){
    loadingdiv.remove();
    if(input.value.trim() === "") return;
    let dataDiv = document.createElement("div");
  dataDiv.classList.add("data-div");
  dataDiv.innerHTML = md.render(text);
  chatbody.append(dataDiv);

}
aibtn.addEventListener("click", (e) =>{ 
chatcontainer.style.display = "block";

});
sendbutton.addEventListener("click", (e) => {
    runGimini(input.value.trim());
});
closedbtn.addEventListener("click", (e) =>{ 
    chatcontainer.style.display = "none";
});