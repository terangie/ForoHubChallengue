create table respuestas(

                        id_respuesta serial not null,
                        mensaje_respuesta text not null,
                        topico_id int null,
                        fecha_respuesta varchar(100) not null,
                        usuario_respuesta_id int null,
                        solucion boolean null,

                        primary key(id_respuesta)

);