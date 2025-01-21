package com.aluracursos.ForoHub.curso;

import jakarta.validation.constraints.NotBlank;

public record DatosCurso (
        @NotBlank
        String nombre_curso,
        @NotBlank
        String categoria ) {
}
