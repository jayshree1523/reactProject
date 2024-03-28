// import { useState } from "react";
// import departmentService from "../../services/DepartmentService";


// function UpdateDepartment(department){

//     let [message, setMessage] = useState("");
//     let [errorMessage, setErrorMessage] = useState("");



//     let [updateDepartment, setUpdateDepartment] = useState(department); // assign incoming props to component state

//     const handleDepartmentChange = (e) => {
//         setUpdateDepartment({ ...department, [e.target.name]: e.target.value });
//     }
    


//     const handleUpdate = (e) => {
//         e.preventDefault();

//         console.log(updateDepartment);
//         departmentService.updateDepartment(updateDepartment)
//             .then(
//                 (resp) => {
//                     console.log(resp.data);
//                     setMessage("Department Updated successFully!");
//                     setErrorMessage("");
//                 }
//             )
//             .catch(
//                 (err) => {
//                     console.log(err.response.data);
//                     setMessage("");
//                     setErrorMessage("Could not update !");
//                 }
//             )


//     }

    

//     return (
//         <>
//             <h3>Update your department:</h3>
//             {
//                 message && <h3 className="alert alert-success">{message}</h3>
//             }
//             {
//                 errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
//             }


//             <form onSubmit={handleUpdate}>
//                 <p>
//                     Name: <input type="text" name="deptName" value={updateDepartment.deptName} onChange={handleDepartmentChange} required pattern="[a-zA-Z ]{2,30}" title="Name should contain min 2 & max 30 chars , no digits and special chars allowed."></input>
//                 </p>
               
//                 <button type="submit">Update Department</button>
                
//             </form>
//         </>
//     )

// }


// export default UpdateDepartment;


// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import departmentService from "../../services/DepartmentService";

// function UpdateDepartment() {
//     const { deptName } = useParams();
//     const [updatedDeptName, setUpdatedDeptName] = useState(deptName);

//     const handleUpdate = () => {
//         console.log(updatedDeptName);
//         departmentService.updateDepartment({deptName: updatedDeptName })
//             .then((resp) => {
                
//                 console.log("Department updated successfully",resp);
                
//             })
//             .catch((error) => {
    
//                 console.error("Error updating department: ", error);
//             });
//     };

//     return (
//         <div>
//             <h3>Update Department</h3>
//             <label>Department Name:</label>
//             <input type="text" value={updatedDeptName} onChange={(e) => setUpdatedDeptName(e.target.value)} />
//             <button onClick={handleUpdate}>Update Department</button>
//         </div>
//     );
// }

// export default UpdateDepartment;

