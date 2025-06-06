package com.example.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.SavedProperty;

@Repository
public interface SavedPropertyRepository extends MongoRepository<SavedProperty, String> {
    List<SavedProperty> findByIdUser(int idUser);
    Optional<SavedProperty> findByIdUserAndIdProperty(int idUser, String propertyId);
}
