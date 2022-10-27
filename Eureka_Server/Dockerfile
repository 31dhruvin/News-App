FROM openjdk:8
EXPOSE 8761
ADD target/eurekaserver.jar eurekaserver.jar
ENTRYPOINT [ "java","-jar","eurekaserver.jar" ]