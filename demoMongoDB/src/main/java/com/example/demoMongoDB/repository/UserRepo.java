package com.example.demoMongoDB.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.demoMongoDB.model.UserModel;

@Repository
public interface UserRepo extends MongoRepository<UserModel, String> {
	
}
