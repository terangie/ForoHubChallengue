package com.aluracursos.ForoHub.topico;

import com.aluracursos.ForoHub.curso.Curso;
import com.aluracursos.ForoHub.respuesta.Respuesta;
import com.aluracursos.ForoHub.usuario.Usuario;

import java.util.List;

public record DatosListadoTopico(Long id, String titulo, String mensaje, String fecha_creacion, Boolean status, Usuario usuario_id, Curso curso_id, List<Respuesta> respuestas) {

    public DatosListadoTopico(Topico topico) {
        this(topico.getId(), topico.getTitulo(), topico.getMensaje(), topico.getFecha_creacion(), topico.getStatus(), topico.getUsuario_id(), topico.getCurso_id(),topico.getRespuestas());
    }
}
