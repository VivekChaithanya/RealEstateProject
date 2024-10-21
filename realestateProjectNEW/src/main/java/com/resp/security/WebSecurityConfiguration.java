package com.resp.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class WebSecurityConfiguration {

    private final UserDetailsService userDetailsService;

    public WebSecurityConfiguration(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http, BCryptPasswordEncoder passwordEncoder) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(userDetailsService)
                                   .passwordEncoder(passwordEncoder);
        return authenticationManagerBuilder.build();
    }

    // Define Security Filter Chain (WebSecurity Configuration)
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors().and()
            .csrf().disable()
            .authorizeHttpRequests()
            
            // Allow POST requests to /api/login/loginUser (login endpoint) for all users
            .requestMatchers(HttpMethod.POST, "/api/login/loginUser").permitAll()
            
            // Allow POST requests to /add (for admin or seller)
            .requestMatchers(HttpMethod.POST, "/add").hasAnyRole("ADMIN", "SELLER")
            
            // Restrict PUT requests to certain paths (for admin roles)
            .requestMatchers(HttpMethod.PUT, "/getRegisterById/{id}", "/updateProject/{id}", "/user/update/{id}", "/role/update/{id}")
                .hasRole("ADMIN")
            
            // Restrict PUT requests for certain roles (seller and agent)
            .requestMatchers(HttpMethod.PUT, "/updateProject/{id}", "/role/update/{id}")
                .hasAnyRole("SELLER", "AGENT")
            
            // Allow GET requests to specific paths for all users
            .requestMatchers(HttpMethod.GET, "/rolesget", "/detailsget", "/register/getAll", "/project/getAll")
                .permitAll()
            
            // Restrict DELETE requests to specific paths (for admin roles)
            .requestMatchers(HttpMethod.DELETE, "/deleteUserById/{id}", "/deleteRoleById/{id}", "/deleteRegisterById/{id}", "/deleteProjectById/{id}")
                .hasRole("ADMIN")
            
            // Restrict DELETE requests for sellers and agents (project deletion)
            .requestMatchers(HttpMethod.DELETE, "/deleteProjectById/{id}")
                .hasAnyRole("SELLER", "AGENT")
            
            // Allow GET requests for specific user roles and project/role details
            .requestMatchers(HttpMethod.GET, "/getUserById/{id}", "/roleById/{id}", "/getRegisterById/{id}", "/getProjectBy/{id}")
                .permitAll()
            
            // Any other requests must be authenticated
            .anyRequest().authenticated(); 
            
        return http.build();
    }
}
