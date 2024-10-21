package com.resp.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resp.model.Projects;

@Repository
public interface ProjectRepo extends JpaRepository<Projects, Integer> {

	public Projects findById(Projects projects);

}
