const pool=require('./db');

exports.updateEmployee=async (req,res)=>{
    try {
        const {id}=req.params;
        const {name, age,email,DOB}=req.body;
        const employeeData=await pool.query("UPDATE EMPLOYEE SET name=$1, age=$2, email=$3, DOB=$4,  returning *",
            [name, age,email,DOB])
        res.json(employeeData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateTeam=async (req,res)=>{
    try {
        const {id}=req.params;
        const {name,id}=req.body;
        const teamData=await pool.query("UPDATE TEAM SET name=$1, id=$2, description=$3 where id= $4 returning *",
            [name,,id])
        res.json(teamData.rows[0]);
    } catch (error) {
        res.status(500).json(error);
    }
}