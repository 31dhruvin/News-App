package com.stackroute.userservice.exception;

public class UserNotFoundException extends Exception {


	private static final long serialVersionUID = 5529833866229857888L;

	public UserNotFoundException(String message) {
		super(message);
	}

}
