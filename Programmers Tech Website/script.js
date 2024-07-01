let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");


icon.addEventListener("click", () => {
    ul.classList.toggle("showData");

})
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const toggleIcon = item.querySelector(".toggle-icon");

    question.addEventListener("click", () => {
        const isOpen = answer.classList.contains("open");
        faqItems.forEach(i => {
            i.querySelector(".faq-answer").classList.remove("open");
            i.querySelector(".toggle-icon").textContent = "+";
        });
        if (!isOpen) {
            answer.classList.add("open");
            toggleIcon.textContent = "×";
        }
    });
});

