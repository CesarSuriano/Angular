package  com.todoapp.todoapp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import  com.todoapp.todoapp.models.Todo;

public interface TodoRepository extends MongoRepository<Todo, String> {

}
