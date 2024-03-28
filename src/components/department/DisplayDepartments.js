import { useEffect, useState } from "react";
import departmentService from "../../services/DepartmentService";




function UpdateDepartment({ department, onUpdateCompletion }) {
    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");



    let [updateDepartment, setUpdateDepartment] = useState(department); // assign incoming props to component state

    const handleDepartmentChange = (e) => {
        setUpdateDepartment({ ...updateDepartment, [e.target.name]: e.target.value });

    }


    const handleUpdate = (e) => {
        e.preventDefault();

        console.log(updateDepartment);
        departmentService.updateDepartment(updateDepartment)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setMessage("Account Updated success!");
                    setErrorMessage("");
                  
                }
            )
            .catch(
                (err) => {
                    console.log(err.response.data);
                    setMessage("");
                   
                    setErrorMessage("Could not update !");
                }
            )


    }

    return (
        <>
           
        <div className="container">
        <div className="row justify-content-center mt-5">
        <div className="col-md-6">
            <div className="card">
                <div className="card-body">
                <h3 className="card-title">Update Department</h3>

                {message && <div className="alert alert-success">{message}</div>}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}


                <form onSubmit={handleUpdate}>
                <div className="mb-4 mt-4 row">
                <label htmlFor="deptName" className="col-sm-2 col-form-label">Name:</label>
                <div className="col-sm-8">
                    <div className="col-sm-16"> 
                    <input
                        type="text"
                        className="form-control"
                        id="deptName"
                        name="deptName"
                        value={updateDepartment.deptName}
                        onChange={handleDepartmentChange}
                        required
                        pattern="[a-zA-Z !@#$%^&*]{2,30}"
                        title="Name should contain min 2 & max chars"/>
                    </div>
                    </div>
                </div>
                <div className="ml-2">
                <button type="submit" className="btn btn-primary">Update Department</button></div>
                <button onClick={onUpdateCompletion} className="btn btn-secondary mt-3">Back</button>
                
                </form>
                </div>
            </div>
        </div>
        
         </div> 
         </div>  
            
        </>
    )
}

function DepartmentsTable({ departmentArray, handleDelete, handleUpdate }) {

    console.log(departmentArray);

    return (
        <>
        <div className="mt-4 mb-4 ">
        <h3> All Departments </h3>
        </div>
            
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departmentArray.map((department) => (
                        <tr key={department.deptId}>
                           
                            <td>{department.deptName}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(department.deptId)}>Delete</button></td>
                        
                            <td><button className="btn btn-danger" onClick={() => handleUpdate(department)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )

}




function DisplayDepartments(){
    let [departments, setDepartments] = useState([]);
    let [isUpdate, setIsUpdate] = useState(false);
    let [updateDepartment,setUpdateDepartment] = useState({});

    useEffect(() => {
        //   Runs only on the first render
                loadAllData();
            }, []);
        
            const loadAllData = () => {
        
                departmentService.getAllDepartments()
                    .then(
                        (resp) => {
                            console.log(resp.data);
                            
                            setDepartments(resp.data);
                        }
                    )
                    .catch(
                        (err) => {
                            console.log(err);
                        }
                    )
                    .finally(
                        () => {
                            console.log("Loaded all data from Server");
                        }
                    )
            }

            const handleDelete = (id) => {
                console.log(id);
                departmentService.deleteDepartmentById(id)
                    .then(
                        (resp) => {
                            console.log(resp);
                            setDepartments(departments.filter((d) => d.deptId !== id))
                        }
                    )
                    .catch(
                        (err) => {
                            console.log(err);
                        }
                    )
            }
        
            const handleUpdate = (updateDepartment) => {
                console.log(updateDepartment);
                
                setUpdateDepartment(updateDepartment);
                setIsUpdate(true);
        
            }
        

    return(
        <>
        {/* <p>department work</p> */}
        {
                isUpdate ? <UpdateDepartment department={updateDepartment} onUpdateCompletion={() => { setIsUpdate(false); loadAllData() }}></UpdateDepartment> :


                departments.length > 0 ? <DepartmentsTable departmentArray={departments} handleDelete={handleDelete} handleUpdate={handleUpdate} /> : <h3> No Accounts found.</h3>
            }
        </>
    ) ;
}
export default DisplayDepartments;