package com.aluracursos.ForoHub.curso;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CursoService {
    @Autowired
    private CRepository repository;

    public List<CursoDTO> obtenerCursos() {
        return convierteDatos(repository.findAll());
    }

    public List<CursoDTO> convierteDatos(List<Curso> curso) {
        return curso.stream()
                .map(c -> new CursoDTO(c.getId_curso(), c.getNombre_curso(), c.getCategoria()))
                .collect(Collectors.toList());
    }
}
