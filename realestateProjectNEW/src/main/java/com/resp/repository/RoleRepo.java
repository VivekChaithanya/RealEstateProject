package com.resp.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resp.model.Role;


@Repository
public interface RoleRepo extends JpaRepository<Role, Integer>{

}