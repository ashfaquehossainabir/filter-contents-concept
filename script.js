function filterContent(className) {
    const divs = document.getElementsByClassName('contents');

    for(let i = 0; i < divs.length; i++) {
        let div = divs[i];

        if(div.classList.contains(className)) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}