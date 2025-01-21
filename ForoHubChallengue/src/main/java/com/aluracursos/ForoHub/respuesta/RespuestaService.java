package com.aluracursos.ForoHub.respuesta;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RespuestaService {
    @Autowired
    private RRepository repository;

    public List<RespuestaDTO> obtenerRespuestas() {
        return convierteDatos(repository.findAll());
    }

    public List<RespuestaDTO> convierteDatos(List<Respuesta> respuesta){
        return respuesta.stream()
                .map(r -> new RespuestaDTO(r.getId_respuesta(), r.getMensaje_respuesta(), r.getTopico_id(), r.getFecha_respuesta(), r.getUsuario_respuesta_id(), r.getSolucion()))
                .collect(Collectors.toList());
    }

}
