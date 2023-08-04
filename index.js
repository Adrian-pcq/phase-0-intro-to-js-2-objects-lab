// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(obj,key,value){
   return { ...obj,[key]: value, }
}    

const newEmployee = updateEmployeeWithKeyAndValue(employee,streetAddress,"11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.streetAddress = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(obj){
   const newobj = {...obj}
   delete newobj.name
   return newobj
}

function  destructivelyDeleteFromEmployeeByKey(obj){
    const newobj = obj
    delete newobj.name
    return newobj
}
