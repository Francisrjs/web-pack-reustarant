import { add } from "lodash";
import coffe from "./img/coffe.jpg";
import home from "./img/home.jpg";
import letter from "./img/letter.jpg";
function Title(){
    const title=document.createElement("h1");
    const imgTitle=document.createElement("img");
    imgTitle.src=home;
    imgTitle.className="imgTitle";
    title.innerHTML="Creando recetas magicas..";
    const description=document.createElement("p");
    description.innerHTML="reserva en nuestra web";
    document.body.appendChild(title);
    document.body.appendChild(description);
    document.body.appendChild(imgTitle);
}
function Home() {
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
    h2.innerHTML = "Disfruta el mejor desayuno..";

    const p = document.createElement("p");
    p.innerHTML = "con muchos combos en nuestra carta.";

    const containerText = document.createElement("div");
    containerText.appendChild(h2);
    containerText.appendChild(p);

    // Junto los dos container
    containerMain.appendChild(divCart);
    containerMain.appendChild(containerText);
    document.body.appendChild(containerMain);

    // Retorno de elementos importantes
    return { h2, p, img };
}

function Menu() {
    const homeElements = Home();
    homeElements.h2.innerHTML = "Carta";
    homeElements.p.innerHTML = ""; // Limpiamos el contenido para agregar las líneas del menú
    homeElements.p.className="hola";
    homeElements.img.src=letter;
    homeElements.img.className="imgLetter";
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


export { Home, Menu, Title};
