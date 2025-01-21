package com.aluracursos.ForoHub.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioService {
    @Autowired
    private URepository repository;

    public List<UsuarioDTO> obtenerUsuario() {
        return convierteDatos(repository.findAll());
    }

    public List<UsuarioDTO> convierteDatos(List<Usuario> usuario) {
        return usuario.stream()
                .map(u -> new UsuarioDTO(u.getId_usuario(), u.getNombre(), u.getCorreo_electronico(), u.getContrasena()))
                .collect(Collectors.toList());
    }
}