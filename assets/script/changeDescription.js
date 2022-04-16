export function changeDescription (nameCards, txt) {

    var areaMessegem = document.getElementById("descriptionTech")

    document.getElementsByClassName(nameCards).addEventListener('mouseover', () => {
        areaMessegem.innerHTML = txt
    });

    document.getElementsByClassName(nameCards).addEventListener('mouseout', () => {
        areaMessegem.innerHTML = "* Passe o mouse por cima do card para ler"
    });
}