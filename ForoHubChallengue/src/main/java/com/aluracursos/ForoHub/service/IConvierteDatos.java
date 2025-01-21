package com.aluracursos.ForoHub.service;

public interface IConvierteDatos {
    <T> T obtenerDatos(String json, Class<T> clase);
}