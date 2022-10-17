FROM tomcat:latest
LABEL maintainer="Neeti Bhatt"
ADD ./dna_project/dna_app.war /usr/local/tomcat/webapps/
EXPOSE 8080
CMD ["catalina.sh", "run"]