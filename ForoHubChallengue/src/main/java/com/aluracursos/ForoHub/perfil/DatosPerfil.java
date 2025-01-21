package com.aluracursos.ForoHub.perfil;

import jakarta.validation.constraints.NotBlank;

public record DatosPerfil (
        @NotBlank
        String nombre_perfil ) {
}
