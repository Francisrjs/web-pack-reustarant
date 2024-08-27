import { add } from "lodash";
import coffe from "./img/coffe.jpg";
import home from "./img/home.jpg";
import letter from "./img/letter.jpg";
import restaurant from "./img/restaurant.jpg"
import reserve from "./img/reserve.jpg"
const content=document.getElementById("content");
const homeButton=document.getElementById("home");
homeButton.className="active";
function TitleContent(){
    const title=document.createElement("h1");
    // const imgTitle=document.createElement("img");
    // imgTitle.src=home;
    // imgTitle.className="imgTitle";
    title.innerHTML="The best coffee in town..";
    const description=document.createElement("p");
    description.innerHTML="book on our website";
    const titleContainer=document.createElement("div");
    titleContainer.className="titleContainer";
    titleContainer.id="titleContainer";
    const titleTextContainer=document.createElement("div");
    
    titleTextContainer.className="textTitleContainer";
    titleTextContainer.id="textTitleContainer";
    titleTextContainer.appendChild(title);
    titleTextContainer.appendChild(description);
    titleContainer.appendChild(titleTextContainer)
    // titleContainer.appendChild(imgTitle);
    titleContainer.style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),url(${home})`;
    document.body.appendChild(titleContainer);
    //down title
    const h4 = document.createElement("h4");
    h4.id="h4";
    h4.innerHTML="The best options";
    document.body.appendChild(h4);
}
function HomeContent() {
    const containerMain = document.createElement("div");
    containerMain.className="mainC";
    const divCart = document.createElement("div");
    divCart.className="cartC";
    const img = document.createElement("img");
    img.src = coffe;
    img.className="imgCoffe";
    img.setAttribute("width", "300");
    img.setAttribute("height", "300");
    divCart.appendChild(img);

    const h2 = document.createElement("h2");
    h2.innerHTML = "Enjoy the best breakfast..";

    const p = document.createElement("p");
    p.innerHTML = "with many combos in our menu.";

    const containerText = document.createElement("div");
    containerMain.appendChild(h2);
    containerText.appendChild(p);

    // Junto los dos container
    const container = document.createElement("div");
    container.appendChild(divCart);
    container.appendChild(containerText);
    containerMain.appendChild(container);
    //put in content
    content.appendChild(containerMain);
    document.body.appendChild(content);
    

    // Retorno de elementos importantes
    return { h2, p, img, containerMain };
}
function DirectionContent(){
    const homeElements = HomeContent();
    homeElements.h2.innerHTML="Visit us";
    homeElements.p.innerHTML="Jamaica 303";
    homeElements.img.src=restaurant;
}
function ReserveContent(){
    const homeElements = HomeContent();
    homeElements.h2.innerHTML="Reserve";
    homeElements.p.innerHTML="Click Here";
    homeElements.img.src=reserve;
}
function MenuContent() {
    const homeElements = HomeContent();
    homeElements.h2.innerHTML = "Letter";
    homeElements.p.innerHTML = ""; // Limpiamos el contenido para agregar las líneas del menú
    homeElements.p.className="menu";
    homeElements.img.src=letter;
    homeElements.img.className="imgLetter";
    homeElements.containerMain.id="divCart"
    function addMenu(product, price) {
        const maxLength = 30; // Longitud máxima para el nombre del producto y el espacio

        // Calculamos el número de guiones bajos basado en la longitud del producto
        const productLength = product.length;
        const spaceLength = maxLength - productLength;
        const separator = "_".repeat(spaceLength + 6); // Ajusta +5 según lo necesites

        // Creamos la cadena formateada
        const menuLine = `${product} ${separator} $${price}`;

        // Creamos un párrafo y añadimos el texto formateado
        const newP = document.createElement("p");
        newP.textContent = menuLine;

        homeElements.p.appendChild(newP); // Añadir el nuevo párrafo al contenedor del menú
        
    }

    addMenu("pizza", 1);
    addMenu("donuts", 6);
    addMenu("ñoquis", 5);
    addMenu("pollo",10);
    addMenu("fideos", 3);
    
    return homeElements;
}
function AboutContent(){
    const homeElements = HomeContent();
    homeElements.h2.innerHTML="Best Coffe";
    homeElements.p.innerHTML="En nuestra cafetería, cada taza es un viaje a los mejores cafetales del mundo. Con granos seleccionados a mano y tostados a la perfección, ofrecemos una experiencia única que deleitará tu paladar. Nuestra pasión por el café se refleja en cada sorbo, garantizando un sabor inigualable y una calidad superior.";
    homeElements.p.className="about";
    homeElements.containerMain.id="aboutCart"
    homeElements.img.src=restaurant;
}



export { HomeContent,DirectionContent,ReserveContent, TitleContent, MenuContent, AboutContent};
