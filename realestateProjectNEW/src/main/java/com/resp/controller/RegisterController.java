package com.resp.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.resp.model.Register;
import com.resp.repository.RegisterRepository;



@RestController
public class RegisterController {
	
	@Autowired
	private RegisterRepository repo;

	@PostMapping(value="/register")
	public String register(@RequestBody Register register) {
		repo.save(register);
		return "Registered successfully"; 
	}
	
	
	@GetMapping("/register/getAll")
	public List<Register> getList() {
	    return repo.findAll();
	}
	
	@GetMapping("/getRegisterById/{id}")
	public Optional<Register> getbyid(@PathVariable int id) {
		return repo.findById(id);
	}
	
	
	@PutMapping("/updateRegister/{id}")
    public ResponseEntity<Register> updateRegister(@PathVariable int id, @RequestBody Register updatedRegister) {

        Optional<Register> existingRegisterOptional = repo.findById(id);
        if (!existingRegisterOptional.isPresent()) {
            return ResponseEntity.notFound().build();  
        }
        Register existingRegister = existingRegisterOptional.get();
        existingRegister.setName(updatedRegister.getName());
        existingRegister.setUsername(updatedRegister.getUsername());
        existingRegister.setEmail(updatedRegister.getEmail());
        existingRegister.setPassword(updatedRegister.getPassword());
        existingRegister.setRole(updatedRegister.getRole());
 
        Register savedRegister = repo.save(existingRegister);
        return ResponseEntity.ok(savedRegister);
    }
	
	@DeleteMapping("/deleteRegisterById/{id}")
	 public ResponseEntity<Void> deleteUser(@PathVariable int id) {
	     repo.deleteById(id);
	     return ResponseEntity.noContent().build();
	 }
}