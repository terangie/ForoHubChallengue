package com.aluracursos.ForoHub.perfil;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "perfiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Perfil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_perfil;

    private String nombre_perfil;

    public Perfil(DatosPerfil perfil) {
        this.nombre_perfil = perfil.nombre_perfil();
    }

    public Perfil actualizarDatos(DatosPerfil perfil) {
    	this.nombre_perfil = perfil.nombre_perfil();
        return this;
    }

    public Long getId_perfil() {
        return id_perfil;
    }

    public String getNombre_perfil() {
        return nombre_perfil;
    }

    public void setId_perfil(Long id_perfil) {
        this.id_perfil = id_perfil;
    }

    public void setNombre_perfil(String nombre_perfil) {
        this.nombre_perfil = nombre_perfil;
    }

}
