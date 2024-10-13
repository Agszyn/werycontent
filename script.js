
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            //} else {
            //  entry.target.classList.remove("show");
        }

    });
});

const hiddenElementsL = document.querySelectorAll(".hidden-l");
const hiddenElementsR = document.querySelectorAll(".hidden-r");
const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElementsLeftLong = document.querySelectorAll(".hidden-left-long");
hiddenElementsL.forEach((el) => observer.observe(el));
hiddenElementsR.forEach((el) => observer.observe(el));
hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsLeftLong.forEach((el) => observer.observe(el));
