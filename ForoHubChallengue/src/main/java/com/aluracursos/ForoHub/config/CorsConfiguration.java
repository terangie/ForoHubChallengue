package com.aluracursos.ForoHub.config;


import org.springframework.context.annotation.Configuration;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@Configuration
public class CorsConfiguration implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:8080")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");

    }

    //@Bean
    //public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        //return httpSecurity.csrf(AbstractHttpConfigurer::disable)
               //.sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
               //.build();
    //}
}



