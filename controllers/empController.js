const Employee =require('../models/Employee')

exports.createEmployee = async(req,res) => {
    try{
        const{empName,empDepartment}=req.body;
        const addEmp = new Employee({empName,empDepartment});
        await addEmp.save();
        res.status(200).json(addEmp);
        
    } catch (error) {
        res.status(500).json({ message: 'Error creating employee', error });
    }
}


exports.getAllEmployees = async (req, res) => {
    try {
        const empRecords = await Employee.find();
        res.status(200).json(empRecords);
        } catch (error) {
        res.status(500).json({ message: 'Error creating employee', error });
    }
}