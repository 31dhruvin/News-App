FROM openjdk:8
EXPOSE 8082
ADD target/UserService.jar UserService.jar
ENTRYPOINT [ "java","-jar","UserService.jar" ]