package com.aluracursos.ForoHub.respuesta;

import com.aluracursos.ForoHub.topico.Topico;
import com.aluracursos.ForoHub.usuario.Usuario;

import jakarta.validation.constraints.NotNull;

public record DatosActualizarRespuesta(@NotNull Long id_respuesta, String mensaje_respuesta, Topico topico, String fecha_respuesta,Usuario usuario_respuesta_id, Boolean solucion) {
}
