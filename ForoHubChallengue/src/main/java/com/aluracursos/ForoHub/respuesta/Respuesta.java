package com.aluracursos.ForoHub.respuesta;

import com.aluracursos.ForoHub.topico.Topico;
import com.aluracursos.ForoHub.usuario.Usuario;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "respuestas")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Respuesta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_respuesta;

    private String mensaje_respuesta;

    @ManyToOne(fetch = FetchType.LAZY, cascade=CascadeType.MERGE)
    @JoinColumn(name = "topico_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Topico topico_id;

    private String fecha_respuesta;

    @ManyToOne(cascade=CascadeType.MERGE)
    @JoinColumn(name = "usuario_respuesta_id")
    private Usuario usuario_respuesta_id;

    private Boolean solucion;


    public Respuesta(DatosRespuesta respuesta) {
        this.mensaje_respuesta = respuesta.mensaje_respuesta();
        this.fecha_respuesta = respuesta.fecha_respuesta();
        this.solucion = respuesta.solucion();
    }

    public void actualizarDatos(DatosActualizarRespuesta datosActualizarRespuesta) {
        if (datosActualizarRespuesta.mensaje_respuesta() != null) {
            this.mensaje_respuesta = datosActualizarRespuesta.mensaje_respuesta();
        }
        if (datosActualizarRespuesta.fecha_respuesta() != null) {
            this.fecha_respuesta = datosActualizarRespuesta.fecha_respuesta();
        }
        if (datosActualizarRespuesta.solucion() != null) {
            this.solucion = datosActualizarRespuesta.solucion();
        }
    }

    public Long getId_respuesta() {
        return id_respuesta;
    }

    public String getMensaje_respuesta() {
        return mensaje_respuesta;
    }

    public Topico getTopico_id() {
        return topico_id;
    }

    public String getFecha_respuesta() {
        return fecha_respuesta;
    }

    public Usuario getUsuario_respuesta_id() {
        return usuario_respuesta_id;
    }

    public Boolean getSolucion() {
        return solucion;
    }

    public void setId_respuesta(Long id_respuesta) {
        this.id_respuesta = id_respuesta;
    }

    public void setMensaje_respuesta(String mensaje_respuesta) {
        this.mensaje_respuesta = mensaje_respuesta;
    }

    public void setTopico_id(Topico topico_id) {
        this.topico_id = topico_id;
    }

    public void setFecha_respuesta(String fecha_respuesta) {
        this.fecha_respuesta = fecha_respuesta;
    }

    public void setUsuario_respuesta_id(Usuario usuario_respuesta_id) {
        this.usuario_respuesta_id = usuario_respuesta_id;
    }

    public void setSolucion(Boolean solucion) {
        this.solucion = solucion;
    }

}

