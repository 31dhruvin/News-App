package com.stackroute.userservice.repository;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.Date;
import java.util.Optional;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import com.stackroute.userservice.model.User;





@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)

public class UserRepositoryTest {

	@Autowired
	private transient UserRepository userRepository;

	private User user;

	public void setUserRepository(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@BeforeEach
	public void  setUp() throws Exception {
		user = new User("John", "John Jeny", "Bob", "123456", new Date());
	}

	@Test
	public void testRegisterUserSuccess() {
		userRepository.save(user);
		Optional<User> object = userRepository.findById(user.getUserId());
		assertThat(object.get().equals(user));
	}
}
