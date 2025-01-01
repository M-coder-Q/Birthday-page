document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");

    // Function to add the flip effect
    function flipImage() {
        gif.style.transition = "transform 1s";
        gif.style.transform = "rotateY(360deg)";
        setTimeout(() => {
            gif.style.transform = "rotateY(0deg)";
        }, 1000);
    }
    // Change text and gif when the Yes button is clicked
    yesBtn.addEventListener("click", () => {
        question.innerHTML = "I love you too. Here are balloons for you!!!";
        gif.src = "https://lh3.googleusercontent.com/pw/AP1GczMEnexYiULBwAueWpcfBNJYRAT5tESc-IWd7opfitFr8MRAKVPtnV8zW0_tdG9u5TXD12dlaseNZ5M-T4wWRtNoQA3hnFlWL-RIZ-T_tNHKpuC4vkc=w2400";
    });

    // Make the No button move randomly on hover
    noBtn.addEventListener("mouseover", () => {
        const wrapper = document.querySelector(".wrapper");
        const wrapperRect = wrapper.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        // Calculate max positions to ensure the button stays within the wrapper
        const maxX = wrapperRect.width - noBtnRect.width;
        const maxY = wrapperRect.height - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
});
