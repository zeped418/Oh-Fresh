// ============   LOAD  =============
let desayunos = [
    {
        nombre: "Chilaquiles</br>sencillos",
        precio: "45.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://img0.didiglobal.com/static/soda_public/do1_QNjfuQLCJG6eeNMC3kB7?x-s3-process=image/resize,m_mfit,w_1200,image/format,webp",
        alt: "prueba 1"
    },

    {
        nombre: "Chilaquiles</br>con carne",
        precio: "55.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://img0.didiglobal.com/static/soda_public/do1_QNjfuQLCJG6eeNMC3kB7?x-s3-process=image/resize,m_mfit,w_1200,image/format,webp",
        alt: "prueba 2"
    },

];

let bebidas = [
    {
        nombre: "Coca-cola 600 ml",
        precio: "45.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://d1zc67o3u1epb0.cloudfront.net/media/catalog/product/cache/23527bda4807566b561286b47d9060f4/5/6/560.jpg",
        alt: "prueba 1"
    },

    {
        nombre: "Leche Hershey's",
        precio: "15.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://superlavioleta.com/cdn/shop/products/LECHEHERSHEYCHOCOLATE236.jpg?v=1597161383",
        alt: "prueba 2"
    },

    {
        nombre: "Agua Bonafont 1L",
        precio: "15.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://images.rappi.com.mx/products/b9f56379-c76c-48b3-a654-a17dc3666752.jpg?d=128x128&e=webp&q=70",
        alt: "prueba 3"
    }
];

let snacks = [
    {
        nombre: "Cheetos",
        precio: "15.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://www.tasteboutique.com/cdn/shop/products/Fotos-tienda-en-linea-Feb2023_0024_23_600x.png?v=1676579633",
        alt: "prueba 1"
    },

    {
        nombre: "KitKat",
        precio: "20.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://www.pngkit.com/png/full/213-2131521_kitkat-4-fingers-kit-kat.png",
        alt: "prueba 2"
    },

    {
        nombre: "Gomitas",
        precio: "15.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://cdn.shopify.com/s/files/1/0566/4391/1854/products/7501030452508_a3d15601-48a9-4062-8031-7a7875b68ac3.png?v=1674552060",
        alt: "prueba 3"
    }
];

window.addEventListener("load", function (event) {
    event.preventDefault();

    // ++++++++++++++++++ Carruseles de productos ++++++++++++++++++++++++

    let carruseles = this.document.querySelectorAll(".carousel-inner");

    let carousel_desayunos = document.getElementById('carousel-desayunos');

    let carousel_bebidas = document.getElementById('carousel-bebidas');

    let carousel_snacks = document.getElementById('carousel-snacks');

    // Recorrido por cada carrusel para agregar por tipo de productos los elementos de su arreglo correspondiente
    for (let j = 1; j < carruseles.length; j++) {

        let producto = [];
        let carousel_producto;

        if (j === 1) {
            producto = desayunos;
            carousel_producto = carousel_desayunos;
        } else if (j === 2) {
            producto = bebidas;
            carousel_producto = carousel_bebidas;
        } else if (j === 3) {
            producto = snacks;
            carousel_producto = carousel_snacks;
        }

        //Para cada tipo de producto se agregará en una card en html, tomando cada objeto de su arreglo correspondiente. El primer producto deberá tener la clase active 
        for (let i = 0; i < producto.length; i++) {
            if (i === 0) {
                carousel_producto.insertAdjacentHTML("afterbegin",
                    `
                <!-- ========== Slide 1 ========== -->
                <div class="carousel-item active">
                <p class="contador-opciones">Opc. 1 de ${producto.length}</p>
                    <div class="card card-product mx-auto">
                        <div class="card-header">
                            ${producto[i].nombre}
                        </div>
                        <div class="img-producto-container">
                            <img src= ${producto[i].imagen} class="card-img-top img-producto" alt=${producto[i].alt}>
                        </div>
                        <div class="card-body">
                            <p class="precio mt-3 mb-1">
                                Precio: $ ${producto[i].precio}
                            </p>
                            <p class="card-text mt-3 mb-3">
                                ${producto[i].texto}
                            </p>
                        </div>
    
                    </div>
                </div>
            `);
            } else {
                carousel_producto.insertAdjacentHTML("beforeend",
                    `
            <!-- ========== Slide ${i + 1} ========== -->
            <div class="carousel-item">
            <p class="contador-opciones">Opc. ${i+1} de ${producto.length}</p>
                <div class="card card-product mx-auto">
                    <div class="card-header">
                        ${producto[i].nombre}
                    </div>
                    <div class="img-producto-container">
                        <img src= ${producto[i].imagen} class="card-img-top img-producto" alt=${producto[i].alt}>
                    </div>
                        <div class="card-body">
                        <p class="precio mt-3 mb-1">
                            Precio: $ ${producto[i].precio}
                        </p>
                        <p class="card-text mt-3 mb-3">
                            ${producto[i].texto}
                        </p>
                    </div>
                </div>
            </div>
            `)
            };
        };
    }

    //Inserta la estructura de los botones de control de cad carrusel

    for (let i = 1; i < carruseles.length; i++) {
        carruseles[i].insertAdjacentHTML("afterend", `
        <!-- ========== Controls ${[i]} ========== -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${[i]}"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${[i]}"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        `);
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        title: '¡Hola, Bienvenid@! 😃'
    })

});// window load{}

// Barra de navegación de móviles

const menu_button = document.getElementById('menu-button');

// Agregar event listeners para cerrar el menú al hacer clic en un elemento de navegación
const nav_link = document.querySelectorAll(".nav-link-mobile"); // Enlaces de navegación
nav_link.forEach(link => {
    link.addEventListener("click", () => {
        menu_button.click();
    });
});