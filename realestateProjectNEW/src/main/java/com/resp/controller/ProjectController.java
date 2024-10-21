package com.resp.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.resp.repository.ProjectRepo;

@RestController
@CrossOrigin("*")
public class ProjectController {
	
	@Autowired
	private ProjectRepo repo;
	
	
	@PostMapping("/project/add")
	public Projects createProjects(@RequestBody Projects projects) {
		return repo.save(projects);
	}
	
	@GetMapping("/project/getAll")
	public List<Projects> getProjects(){
		return repo.findAll();
	}
	@GetMapping("/getProjectBy/{id}")
	public Optional<Projects> getProjectById(@PathVariable int id) {
		return repo.findById(id);
	}
	
	@DeleteMapping("/deleteProjectById/{id}")
	 public ResponseEntity<Void> deleteUser(@PathVariable int id) {
	     repo.deleteById(id);
	     return ResponseEntity.noContent().build();
	 }
	
	
    @PutMapping("/updateProject/{id}")
    public ResponseEntity<Projects> updateProject(@PathVariable int id, @RequestBody Projects updatedProject) { 
        Optional<Projects> existingProjectOptional = repo.findById(id);
        if (!existingProjectOptional.isPresent()) {
            return ResponseEntity.notFound().build();  
        }
        Projects existingProject = existingProjectOptional.get();
        existingProject.setProject(updatedProject.getProject());
        existingProject.setDevelopedBy(updatedProject.getDevelopedBy());
        existingProject.setCost(updatedProject.getCost());
        existingProject.setSqft(updatedProject.getSqft());
        existingProject.setImages(updatedProject.getImages());
        existingProject.setLocation(updatedProject.getLocation());
        existingProject.setDescription(updatedProject.getDescription());
        Projects savedProject = repo.save(existingProject);
        return ResponseEntity.ok(savedProject);
    }
	

}

