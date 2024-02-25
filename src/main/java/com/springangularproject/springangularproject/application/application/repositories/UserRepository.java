package com.springangularproject.springangularproject.application.application.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springangularproject.springangularproject.application.application.entities.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long>{
    
}
