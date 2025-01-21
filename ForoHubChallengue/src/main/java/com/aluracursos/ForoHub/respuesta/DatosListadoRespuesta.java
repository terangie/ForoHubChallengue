package com.aluracursos.ForoHub.respuesta;

import com.aluracursos.ForoHub.topico.Topico;
import com.aluracursos.ForoHub.usuario.Usuario;

public record DatosListadoRespuesta(Long id_respuesta, String mensaje_respuesta, Topico topico_id, String fecha_respuesta, Usuario usuario_respuesta_id, Boolean solucion) {

    public DatosListadoRespuesta(Respuesta respuesta) {
        this(respuesta.getId_respuesta(), respuesta.getMensaje_respuesta(), respuesta.getTopico_id(), respuesta.getFecha_respuesta(), respuesta.getUsuario_respuesta_id(), respuesta.getSolucion());
    }
}
