DROP TABLE ESTUDIANTES;


create table ESTUDIANTES(
	ID SERIAL, 
	NOMBRE VARCHAR (50),
	RUT VARCHAR (20) UNIQUE,
	CURSO VARCHAR (20),
	NIVEL VARCHAR (20)
	

);

SELECT * FROM ESTUDIANTES;

 --NUEVO ESTUDIANTES

INSERT INTO ESTUDIANTES (NOMBRE, RUT, CURSO, NIVEL) VALUES ('JUAN PEREZ','25.988.465-3','4','2') RETURNING *;
INSERT INTO ESTUDIANTES (NOMBRE, RUT, CURSO, NIVEL) VALUES ('luisa PEREZ','19.948.465-3','Flauta','6') RETURNING *;
INSERT INTO ESTUDIANTES (NOMBRE, RUT, CURSO, NIVEL) VALUES ('luisa PEREZ','19.948.465-3','Flauta','6') RETURNING *;
INSERT INTO ESTUDIANTES (NOMBRE, RUT, CURSO, NIVEL) VALUES ('luisa PEREZ','19.948.465-3','Flauta','6') RETURNING *;



--Actualizar Estudiante 

UPDATE ESTUDIANTES
SET CURSO = 'Física', NIVEL = '3'
WHERE RUT = '321';


---eliminar Estudiante por id 

DELETE FROM ESTUDIANTES 
WHERE rut = '321' 
RETURNING *;




