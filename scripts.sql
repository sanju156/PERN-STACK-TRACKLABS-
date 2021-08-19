create table employee(
		name varchar(50),
		age varchar(100)NOT NULL,
		email varchar(100)NOT NULL,
		DOB timestamp NOT NULL,
		constraint emp_cons PRIMARY KEY(id)
);

create table team(
		id integer NOT NULL DEFAULT nextval('team_seq'),
		dept_name varchar(50) NOT NULL,
		email varchar(50),
		DOB timestamp NOT NULL,
		description varchar(500),
		constraint team_cons PRIMARY KEY(id)
);

create table employee_assignment(
		id integer NOT NULL DEFAULT nextval('employee_assignment_seq'),
		employee_id integer NOT NULL,
		team_id integer NOT NULL,
		constraint employe_assignment_cons PRIMARY KEY(id),
	    constraint fk_employee FOREIGN KEY(employee_id) REFERENCES employee(id),
	    constraint fk_team FOREIGN KEY(team_id) REFERENCES team(id)
)