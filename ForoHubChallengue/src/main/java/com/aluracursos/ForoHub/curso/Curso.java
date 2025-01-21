package com.aluracursos.ForoHub.curso;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cursos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_curso;

    private String nombre_curso;

    private String categoria;


    public Curso(DatosCurso curso) {
        this.nombre_curso = curso.nombre_curso();
        this.categoria = curso.categoria();     

    }

    public Curso actualizarDatos(DatosCurso curso) {
    	this.nombre_curso = curso.nombre_curso();
        this.categoria = curso.categoria(); 
        return this;
    }

    public Long getId_curso() {
        return id_curso;
    }

    public String getNombre_curso() {
        return nombre_curso;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setId_curso(Long id_curso) {
        this.id_curso = id_curso;
    }

    public void setNombre_curso(String nombre_curso) {
        this.nombre_curso = nombre_curso;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

}
