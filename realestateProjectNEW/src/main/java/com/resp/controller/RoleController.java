package com.resp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.resp.model.Projects;
import com.resp.model.Role;
import com.resp.model.User;
import com.resp.repository.RoleRepo;

@RestController
@CrossOrigin("*")
public class RoleController {
	
	@Autowired
	private RoleRepo repo;
	
	@PostMapping("/role")
	public Role createroRole(@RequestBody Role role) {
		return repo.save(role);
	}
	
	@GetMapping("/rolesget")
	public List<Role> getroRoles(){
		return repo.findAll();
	}
	  @GetMapping("/roleById/{id}")
	  public Optional<Role> getRoleById(@PathVariable int id) {
		  return repo.findById(id);
	  }
	  
	  @PutMapping("/role/update/{id}")
	  public ResponseEntity<Role> updateRole(@PathVariable int id, @RequestBody Role updatedRole) {
	      Optional<Role> roleOptional = repo.findById(id);
	      if (!roleOptional.isPresent()) {
	          return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  
	      }
	      Role existingRole = roleOptional.get();
	      existingRole.setName(updatedRole.getName()); 
	      Role savedRole = repo.save(existingRole);
	      return ResponseEntity.ok(savedRole);
	  }
	 
	 @DeleteMapping("/deleteRoleById/{id}")
	 public ResponseEntity<Void> deleteUser(@PathVariable int id) {
	     repo.deleteById(id);
	     return ResponseEntity.noContent().build();
	 }
	

}
