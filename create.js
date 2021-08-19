const pool=require('./db');

exports.createEmployee= async(req,res)=>{
    try {
        const {name, age,email,DOB}=req.body;
        const employeeData= await pool.query("INSERT INTO EMPLOYEE(name, age,email,DOB) VALUES($1,$2,$3,$4) returning *",
                    [name,age,email,DOB])
        res.json(employeeData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createDepartment=async(req,res)=>{
    try {
        const {dept_name,DOJ,id}=req.body;
        const teamData= await pool.query("INSERT INTO TEAM(dept_name,DOJ,id) VALUES($1,$2,$3) returning *",
                    [dept_name,DOJ,id])
        res.json(teamData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.createEmployeeAssignment= async(req,res)=>{
    try {
        const {employee_id,team_id}=req.body;
        const employeeAssignmentData= await pool.query("INSERT INTO EMPLOYEE_ASSIGNMENT(employee_id,team_id) VALUES($1,$2) returning *",
                    [employee_id,team_id])
        res.json(employeeAssignmentData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}