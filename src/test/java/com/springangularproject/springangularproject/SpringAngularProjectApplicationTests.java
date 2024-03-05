package com.springangularproject.springangularproject;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringAngularProjectApplicationTests {

	    @Autowired
    private ApplicationContext context;

	@Test
	void contextLoads() {
		 assertNotNull(context);
	}

}
