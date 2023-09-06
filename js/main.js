// ============   LOAD  =============
let desayunos = [
    {
        nombre: "Chilaquiles sencillos",
        precio: "45.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://img0.didiglobal.com/static/soda_public/do1_QNjfuQLCJG6eeNMC3kB7?x-s3-process=image/resize,m_mfit,w_1200,image/format,webp",
        alt: "prueba 1"
    },

    {
        nombre: "Chilaquiles con pollo",
        precio: "55.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://img0.didiglobal.com/static/soda_public/do1_QNjfuQLCJG6eeNMC3kB7?x-s3-process=image/resize,m_mfit,w_1200,image/format,webp",
        alt: "prueba 2"
    },

    {
        nombre: "Chilaquiles con Milanesa",
        precio: "65.00",
        texto: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imagen: "https://img0.didiglobal.com/static/soda_public/do1_QNjfuQLCJG6eeNMC3kB7?x-s3-process=image/resize,m_mfit,w_1200,image/format,webp",
        alt: "prueba 3"
    }
];

window.addEventListener("load", function (event) {
    event.preventDefault();

    // Desayunos
    let carousel_desayunos = document.getElementById('carousel-desayunos')

    // Demás desayunos
    for (let i = 0; i < desayunos.length; i++) {
        if (i === 0) {
            carousel_desayunos.insertAdjacentHTML("afterbegin",
                `
            <!-- ========== Slide 1 ========== -->
            <div class="carousel-item active">
                <div class="card card-product mx-auto">
                    <div class="card-header">
                        ${desayunos[i].nombre}
                    </div>
                    <img src= ${desayunos[i].imagen} class="card-img-top img-producto" alt=${desayunos[i].alt}>
                    <div class="card-body">
                        <p class="precio mt-3 mb-1">
                            Precio: $ ${desayunos[i].precio}
                        </p>
                        <p class="card-text mt-3 mb-3">
                            ${desayunos[i].texto}
                        </p>
                    </div>

                </div>
            </div>
        `);
        } else {
            carousel_desayunos.insertAdjacentHTML("beforeend",
                `
        <!-- ========== Slide ${i + 1} ========== -->
        <div class="carousel-item">
            <div class="card card-product mx-auto">
                <div class="card-header">
                    ${desayunos[i].nombre}
                </div>
                <img src= ${desayunos[i].imagen} class="card-img-top img-producto" alt=${desayunos[i].alt}>
                <div class="card-body">
                    <p class="precio mt-3 mb-1">
                        Precio: $ ${desayunos[i].precio}
                    </p>
                    <p class="card-text mt-3 mb-3">
                        ${desayunos[i].texto}
                    </p>
                </div>
            </div>
        </div>
        `)
        };
    };

    //Controles de carrusel
    let carruseles=this.document.querySelectorAll(".carousel-inner");
    
    for(let i=1;i<carruseles.length;i++){
        carruseles[i].insertAdjacentHTML("afterend",`
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

    // // Footers
    // let cards_footer = this.document.querySelectorAll('.card-footer');

    // for (let i = 0; i < cards_footer.length; i++) {
    //     cards_footer[i].innerHTML = `
    //     <!-- Mensaje de whatsapp -->
    //             <button type="button" class="btn btn-outline-success">
    //                 <a href="https://wa.me/525586832459?text=¡Hola!" class="enlace-whatsapp" target="_blank">
    //                     <i class="bi bi-whatsapp"></i>
    //                     Pedir
    //                 </a>
    //             </button>
    //     `;
    // };

});// window load{}

