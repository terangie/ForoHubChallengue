create table usuarios(

                           id_usuario SERIAL PRIMARY KEY,
                           nombre varchar(100)  null,
                           correo_electronico varchar(100) null,
                           contrasena varchar(200) null,
                           perfiles json  null


);