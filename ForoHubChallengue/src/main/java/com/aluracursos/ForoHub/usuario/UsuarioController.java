package com.aluracursos.ForoHub.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private URepository uRepository;

    @Autowired
    private UsuarioService servicio;

    @GetMapping
    public List<UsuarioDTO> obtenerUsuario() {
        return servicio.obtenerUsuario();
    }

    @PostMapping
    public void registrarUsuario(@RequestBody @Valid DatosUsuario datosUsuario) {
        uRepository.save(new Usuario(datosUsuario));
    }

}
