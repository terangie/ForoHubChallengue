package com.aluracursos.ForoHub.topico;

import com.aluracursos.ForoHub.curso.Curso;
import com.aluracursos.ForoHub.usuario.URepository;
import com.aluracursos.ForoHub.usuario.Usuario;

import com.aluracursos.ForoHub.curso.CRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/topicos")
public class TopicoController {

    @Autowired
    private TRepository tRepository;
    
    @Autowired
    private URepository uRepository;
    
    @Autowired
    private CRepository cRepository;

    @Autowired
    private TopicoService servicio;


    @GetMapping
    public List<TopicoDTO> obtenerTodos(){
        return servicio.obtenerTodos();
    }
    
    @GetMapping("/{id}")
    public Optional<Topico> obtenerTopico(@PathVariable Long id){
        return tRepository.findById(id);
    }

    @PostMapping
    public void registrarTopico(@RequestBody Topico topico) {
    	
    	Optional<Usuario> usuarioOptional = uRepository.findById(topico.getUsuario_id().getId_usuario());
    	Optional<Curso> cursoOptional = cRepository.findById(topico.getCurso_id().getId_curso());
    	
    	topico.setUsuario_id(usuarioOptional.get());
    	topico.setCurso_id(cursoOptional.get());
        tRepository.save(topico);
    }
    
    @PutMapping("/{id}")
    @Transactional
    public void actualizarTopico(@RequestBody DatosActualizarTopico datosActualizarTopico) {
        Topico topico = tRepository.getReferenceById(datosActualizarTopico.id());
        topico.actualizarDatos(datosActualizarTopico);
    }


    @DeleteMapping("/{id}")
    public void eliminarTopico(@PathVariable Long id) {
        Topico topico = tRepository.getReferenceById(id);
       tRepository.delete(topico);
  	}
      

}
