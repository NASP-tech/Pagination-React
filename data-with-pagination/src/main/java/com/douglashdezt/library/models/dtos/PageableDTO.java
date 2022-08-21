package com.douglashdezt.library.models.dtos;

import javax.validation.constraints.Min;

public class PageableDTO {
	@Min(0)
	private int page;
	
	@Min(0)
	private int limit;

	public PageableDTO(@Min(0) int page, @Min(0) int limit) {
		super();
		this.page = page;
		this.limit = limit;
	}

	public PageableDTO() {
		super();
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

}
