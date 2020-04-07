package it.andrea.SpringBootWebJPA;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AlienController {
	
	@GetMapping("/")
	@ResponseBody
	public String getHome() {
		return "Hello World!!!";
	}
	
}
