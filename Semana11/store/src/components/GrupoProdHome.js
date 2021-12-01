import { useState, useEffect } from "react";
import { obtenerProductosPorPagina } from "../services/productoService";
import ProductoCard from "./ProductoCard";

//productos va a ser un arreglo
const GrupoProdHome = () => {
    const [productos, setProductos] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [limite, setLimite] = useState(6);

    const getProductos = async () => {
        try {
            const prodObtenidos = await obtenerProductosPorPagina(pagina, limite);
            // setProductos(prodObtenidos);
            setProductos([...productos, ...prodObtenidos]);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getProductos();
    }, [pagina]);

    return (
        <div className="container " >
            <div className="row my-2 shadow-sm p-3 mb-5  rounded">
                {productos.map((prod, i) => (
                    <div className="col-12 col-md-6 col-lg-4">
                        <ProductoCard key={i} producto={prod} />
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center ">
                <button
                    className="btn btn-primary mb-5"
                    onClick={() => {
                        setPagina(pagina + 1);
                    }}
                >
                    Ver más...
                </button>
            </div>
        </div>
    );
};

export default GrupoProdHome;