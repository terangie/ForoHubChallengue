package com.aluracursos.ForoHub.curso;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/cursos")
public class CursoController {

    @Autowired
    private CRepository cRepository;

    @Autowired
    private CursoService servicio;
    

    @GetMapping
    public List<CursoDTO> obtenerCursos() {
    	return servicio.obtenerCursos();
    }
    

    @PostMapping
    public void registrarCurso(@RequestBody DatosCurso datosCurso) {
        cRepository.save(new Curso(datosCurso));
    }

}
