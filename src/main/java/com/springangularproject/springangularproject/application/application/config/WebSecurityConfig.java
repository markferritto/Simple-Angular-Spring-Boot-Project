package com.springangularproject.springangularproject.application.application.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Configures Spring Security for the application.
 */
@EnableWebMvc
@Configuration
public class WebSecurityConfig {

       /**
     * Creates a {@link SecurityFilterChain} with the specified {@link HttpSecurity}.
     *
     * @param http the {@link HttpSecurity} to use
     * @return the {@link SecurityFilterChain}
     * @throws Exception if an error occurs while configuring Spring Security
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.build();
    }

    /**
     * Configures Cross-Origin Resource Sharing (CORS) for the application.
     *
     * @return the {@link CorsConfigurationSource} for CORS
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200")); // Replace with your Angular app's URL
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
