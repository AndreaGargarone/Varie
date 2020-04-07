package it.andrea.SpringBootWebJPA;

import org.springframework.data.jpa.repository.JpaRepository;


public interface AlienRepository extends JpaRepository<Alien, Integer> {

	
	
}
