package com.aluracursos.ForoHub.perfil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/perfiles")
public class PerfilController {

    @Autowired
    private PRepository pRepository;

    @Autowired
    private PerfilService servicio;

    @GetMapping
    public List<PerfilDTO> obtenerPerfil() {
        return servicio.obtenerPerfil();
    }

    @PostMapping
    public void registrarPerfil(@RequestBody DatosPerfil datosPerfil) {
        pRepository.save(new Perfil(datosPerfil));
    }

}
