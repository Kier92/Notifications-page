let notificationContainer = document.querySelectorAll(".notifcation-container");

notificationContainer.forEach((element, index) => {
    let showMessage =  element.querySelector(".notification-message");
    let message = element.querySelector(".message");
    let abouts = element.querySelectorAll(".about");
    if(message){
        message.addEventListener("click", () => {
            let about = message.querySelector(".about")
            showMessage.classList.add("show-message");
        })
    }
    
    abouts.forEach(about => {
        about.addEventListener("click", () => {
            about.classList.add("click");
        })
    })
    
})