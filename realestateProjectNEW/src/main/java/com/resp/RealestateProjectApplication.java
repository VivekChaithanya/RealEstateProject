package com.resp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.resp.repository")
public class RealestateProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(RealestateProjectApplication.class, args);
	}

}

