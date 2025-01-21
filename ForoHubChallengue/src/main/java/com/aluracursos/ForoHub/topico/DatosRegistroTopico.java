package com.aluracursos.ForoHub.topico;

import com.aluracursos.ForoHub.curso.Curso;
import com.aluracursos.ForoHub.respuesta.Respuesta;
import com.aluracursos.ForoHub.usuario.Usuario;

import jakarta.validation.constraints.NotBlank;
import java.util.List;


public record DatosRegistroTopico(
        @NotBlank
        String titulo,
        @NotBlank
        String mensaje,
        @NotBlank
        String fecha_creacion,
        @NotBlank
        Boolean status,
        @NotBlank
        Usuario usuario_id,
        @NotBlank
        Curso curso_id,
        @NotBlank
        List<Respuesta> respuestas

        ) {
}
