import DataFQA from "./componentFAQ.js";
const app = document.getElementById("app");
const title = document.createElement("div");
title.classList.add("title");
title.innerHTML = "FAQ";
app.append(title);
for (let i = 0; i < 3; i++) {
  if (i == 0) {
    const ques1 = "What do you do in your free time??";
    const answer1 =
      "I watch movies, listen to music, read books and play badminton";
    const fqa1 = new DataFQA(ques1, answer1);
    app.appendChild(fqa1.render());
  }
  if (i == 1) {
    const ques2 = "Do you like sports?";
    const answer2 = "Yes I like to play badminton";
    const fqa2 = new DataFQA(ques2, answer2);
    app.appendChild(fqa2.render());
  }
  if (i == 2) {
    const ques3 = "Which football team do you like?";
    const answer3 = "Manchester United";
    const fqa3 = new DataFQA(ques3, answer3);
    app.appendChild(fqa3.render());
  }
}
