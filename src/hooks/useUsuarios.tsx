import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

// Función General que contiene otras funciones
export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    // Contador de la páginación
    const paginaRef = useRef(1);

    // ejecuta el código para cargar usuarios
    useEffect(() => {
        // llamado al API
        cargarUsuarios();

    }, []);

    // TODO: Funcion cargar usuarios =============/
    const cargarUsuarios = async () => {

        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current // Current accede al valor del elemento
            }
        })

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            paginaRef.current--;
            alert("No hay más registros");
        }

    }

    // TODO: Funcion Página Anterior =============/
    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    // TODO: Funcion Página Anterior =============/
    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    // TODO: TODO: retorno de Funciones
    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }
}
