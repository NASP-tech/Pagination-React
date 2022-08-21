package com.douglashdezt.library.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douglashdezt.library.models.dtos.MessageDTO;

@RestController
@RequestMapping("/test")
public class TestController {

	@GetMapping("/")
	public ResponseEntity<MessageDTO> hello() {
		return new ResponseEntity<> (
					new MessageDTO("Hello World"),
					HttpStatus.OK
				);
	}
}
