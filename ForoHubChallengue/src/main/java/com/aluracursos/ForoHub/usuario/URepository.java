package com.aluracursos.ForoHub.usuario;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface URepository extends JpaRepository<Usuario, Long> {
    Page<Usuario> findAll(Pageable paginacion);
    
    UserDetails findByNombre(String nombre);
}
