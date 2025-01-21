create table topicos(

                        id serial not null,
                        titulo text not null,
                        mensaje text not null,
                        fecha_creacion varchar(100) not null,
                        status boolean null,
                        usuario_id int null,
                        curso_id int null,
                        respuestas json  null,

                        UNIQUE(titulo, mensaje),
                        primary key(id)

);