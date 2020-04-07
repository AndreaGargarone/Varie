package it.andrea.SpringBootWebJPA;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AlienRestController {
	
	@Autowired
	AlienRepository repo;
	
	@GetMapping("alien/{id}")
	@ResponseBody
	public Optional<Alien> getAlienById(@PathVariable("id") int id) {
		return repo.findById(id);
	}
	
	@GetMapping("aliens")
	@ResponseBody
	public List<Alien> getAllAlien() {
		return repo.findAll();
	}
}
