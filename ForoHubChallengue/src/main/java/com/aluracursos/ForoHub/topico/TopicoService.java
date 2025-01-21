package com.aluracursos.ForoHub.topico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TopicoService {
    @Autowired
    private TRepository repository;

    public List<TopicoDTO> obtenerTodos() {
        return convierteDatos(repository.findAll());
    }
    

    public List<TopicoDTO> convierteDatos(List<Topico> topico){
        return topico.stream()
                .map(t -> new TopicoDTO(t.getId(), t.getTitulo(), t.getMensaje(), t.getFecha_creacion(), t.getStatus(), t.getUsuario_id(), t.getCurso_id(), t.getRespuestas()))
                .collect(Collectors.toList());
    }

}