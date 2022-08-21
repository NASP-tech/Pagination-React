package com.douglashdezt.library.services;

import java.util.List;

import com.douglashdezt.library.models.dtos.PageableDTO;
import com.douglashdezt.library.models.entities.Book;

public interface BookService {
	List<Book> findAll(PageableDTO info);
	Book findOneByIsbn(String isbn);
}
