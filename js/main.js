// ============   LOAD  =============
let desayuno1={
    nombre: "Chilaquiles sencillos", 
    precio: "45.00", 
    texto:"Some quick example text to build on the card title and make up the bulk of the card's content.", 
    imagen: "https://img0.didiglobal.com/static/soda_public/do1_QNjfuQLCJG6eeNMC3kB7?x-s3-process=image/resize,m_mfit,w_1200,image/format,webp",
    alt:"prueba 1"
};

let desayunos=[
    {nombre: "Chilaquiles con pollo", 
    precio: "55.00", 
    texto:"Some quick example text to build on the card title and make up the bulk of the card's content.", 
    imagen: "https://img0.didiglobal.com/static/soda_public/do1_QNjfuQLCJG6eeNMC3kB7?x-s3-process=image/resize,m_mfit,w_1200,image/format,webp",
    alt:"prueba 2"
    },
    
    {nombre: "Chilaquiles con Milanesa", 
    precio: "65.00", 
    texto:"Some quick example text to build on the card title and make up the bulk of the card's content.", 
    imagen: "https://img0.didiglobal.com/static/soda_public/do1_QNjfuQLCJG6eeNMC3kB7?x-s3-process=image/resize,m_mfit,w_1200,image/format,webp",
    alt:"prueba 3" 
    }
];

window.addEventListener("load", function (event) {
    event.preventDefault();

    // Desayuno 1
    let cards_desayunos1=document.getElementById('cards_desayunos1')

    cards_desayunos1.insertAdjacentHTML("beforeend",
    `
    <div class="card card-product mx-auto">
        <div class="card-header">
            ${desayuno1.nombre}
        </div>
        <img src= ${desayuno1.imagen} class="card-img-top img-producto" alt=${desayuno1.alt}>
        <div class="card-body">
            <p class="precio mt-3 mb-1">
                Precio: $ ${desayuno1.precio}
            </p>
            <p class="card-text mt-3 mb-3">
                ${desayuno1.texto}
            </p>
        </div>
        <div class="card-footer" id="card-footer">
        </div>
    </div>
    `);

    // Demás desayunos
    for (let i=desayunos.length-1;i >=0;i--){
        cards_desayunos1.insertAdjacentHTML("afterend",
        `
        <!-- ========== Slide ${i+2} ========== -->
        <div class="carousel-item">
            <div class="card card-product mx-auto">
                <div class="card-header">
                    ${desayunos[i].nombre}
                </div>
                <img src= ${desayunos[0].imagen} class="card-img-top img-producto" alt=${desayunos[0].alt}>
                <div class="card-body">
                    <p class="precio mt-3 mb-1">
                        Precio: $ ${desayunos[i].precio}
                    </p>
                    <p class="card-text mt-3 mb-3">
                        ${desayunos[i].texto}
                    </p>
                </div>
                <div class="card-footer" id="card-footer">
                
                </div>
            </div>
        </div>
        `)
    };

    // Footers
    let cards_footer=this.document.querySelectorAll('.card-footer');

    for(let i=0; i<cards_footer.length;i++){
        cards_footer[i].innerHTML=`
        <!-- Mensaje de whatsapp -->
                <button type="button" class="btn btn-outline-success">
                    <a href="https://wa.me/525586832459?text=Hola! quiero hacer un pedido" class="enlace-whatsapp" target="_blank">
                        <i class="bi bi-whatsapp"></i>
                        Pedir
                    </a>
                </button>
        `;
    };

});// window load{}

