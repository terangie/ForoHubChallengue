package com.aluracursos.ForoHub.topico;

import com.aluracursos.ForoHub.curso.Curso;
import com.aluracursos.ForoHub.respuesta.Respuesta;
import com.aluracursos.ForoHub.usuario.Usuario;

import jakarta.validation.constraints.NotNull;
import java.util.List;

public record DatosActualizarTopico(@NotNull Long id, String titulo, String mensaje, String fecha_creacion, Boolean status, Usuario usuario_id, Curso curso_id, List<Respuesta> respuestas) {
}
