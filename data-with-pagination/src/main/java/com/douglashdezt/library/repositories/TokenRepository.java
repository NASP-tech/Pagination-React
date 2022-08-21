package com.douglashdezt.library.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.douglashdezt.library.models.entities.Token;
import com.douglashdezt.library.models.entities.User;

public interface TokenRepository extends JpaRepository<Token, Long>{
	List<Token> findByUserAndActive(User user, Boolean active);
}
