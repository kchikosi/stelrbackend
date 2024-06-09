package com.stelr.stelrbackend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StelrbackendApplication {
	private static final Logger logger = LoggerFactory.getLogger(StelrbackendApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(StelrbackendApplication.class, args);
		logger.info("Application started");
	}

}
