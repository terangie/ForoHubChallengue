package com.aluracursos.ForoHub.respuesta;

import com.aluracursos.ForoHub.topico.Topico;
import com.aluracursos.ForoHub.usuario.Usuario;

public record RespuestaDTO(Long id_respuesta,
                           String mensaje_respuesta,
                           Topico topico_id,
                           String fecha_respuesta,
                           Usuario usuario_respuesta_id,
                           Boolean solucion

    ){
}
