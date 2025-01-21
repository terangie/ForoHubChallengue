package com.aluracursos.ForoHub.topico;

import com.aluracursos.ForoHub.curso.Curso;
import com.aluracursos.ForoHub.respuesta.Respuesta;
import com.aluracursos.ForoHub.usuario.Usuario;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "topicos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Topico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    private String mensaje;

    private String fecha_creacion;

    private Boolean status;

    @ManyToOne(fetch = FetchType.LAZY, cascade=CascadeType.MERGE)
    @JoinColumn(name = "usuario_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Usuario usuario_id;

    @ManyToOne(fetch = FetchType.LAZY, cascade=CascadeType.MERGE)
    @JoinColumn(name = "curso_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Curso curso_id;

    @OneToMany(mappedBy = "topico_id", cascade = CascadeType.ALL)
    private List<Respuesta> respuestas = new ArrayList<>();


    public Topico(DatosRegistroTopico datosRegistroTopico) {
        this.titulo = datosRegistroTopico.titulo();
        this.mensaje = datosRegistroTopico.mensaje();
        this.fecha_creacion = datosRegistroTopico.fecha_creacion();
        this.status = datosRegistroTopico.status();
    }

    public void actualizarDatos(DatosActualizarTopico datosActualizarTopico) {
        if (datosActualizarTopico.titulo() != null) {
            this.titulo = datosActualizarTopico.titulo();
        }
        if (datosActualizarTopico.mensaje() != null) {
            this.mensaje = datosActualizarTopico.mensaje();
        }
        if (datosActualizarTopico.fecha_creacion() != null) {
            this.fecha_creacion = datosActualizarTopico.fecha_creacion();
        }
        if (datosActualizarTopico.status() != null) {
            this.status = datosActualizarTopico.status();
        }

    }

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getMensaje() {
        return mensaje;
    }

    public String getFecha_creacion() {
        return fecha_creacion;
    }

    public Boolean getStatus() {
        return status;
    }

    public Usuario getUsuario_id() {
        return usuario_id;
    }

    public Curso getCurso_id() {
        return curso_id;
    }

    public List<Respuesta> getRespuestas() {
        return respuestas;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public void setFecha_creacion(String fecha_creacion) {
        this.fecha_creacion = fecha_creacion;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public void setUsuario_id(Usuario usuario_id) {
        this.usuario_id = usuario_id;
    }

    public void setCurso_id(Curso curso_id) {
        this.curso_id = curso_id;
    }

    public void setRespuestas(List<Respuesta> respuestas) {
        this.respuestas = respuestas;
    }

}
