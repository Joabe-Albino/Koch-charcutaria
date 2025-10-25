const body = document.body;

const img = document.createElement("img");
img.src = "../src/produtp.png";


const divProdutos = document.createElement("div");
divProdutos.classList.add("produtos");
divProdutos.append(img);

const sectionProdutos = document.createElement("section");
sectionProdutos.append(divProdutos);

const divContainerProdutos = document.createElement("div");
divContainerProdutos.classList.add("container-produtos");
divContainerProdutos.append(sectionProdutos);   


body.append(divContainerProdutos);
