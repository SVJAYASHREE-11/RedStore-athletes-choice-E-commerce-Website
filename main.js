// 1. Mobile Menu Toggle

var MenuItems = document.getElementById("MenuItems");

if (MenuItems) {
    MenuItems.style.maxHeight = "0px";

    function menutoggle() {
        if (MenuItems.style.maxHeight === "0px") {
            MenuItems.style.maxHeight = "200px";
        } else {
            MenuItems.style.maxHeight = "0px";
        }
    }
}


 // 2.Contact Form Validation
function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email");
        return false;
    }

    if (message.length < 10) {
        alert("Message must be at least 10 characters long");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// 3. Product Image Gallery
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

if (ProductImg) {
    for (let i = 0; i < SmallImg.length; i++) {
        SmallImg[i].onclick = function () {
            ProductImg.src = SmallImg[i].src;
        };
    }
}

// 4. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});
