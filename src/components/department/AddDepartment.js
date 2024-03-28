import { useState } from "react";
import departmentService from "../../services/DepartmentService";

function AddDepartment(){
    let [department, setDepartment] = useState({
        "deptName" : ''
    });

    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");

    const handleDepartmentChange = (e) =>{
        setDepartment({...department,[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(department);
        departmentService.addDepartment(department)
        .then(
            (resp) => {
                console.log(resp.data);
                setMessage("Department Added success!");
                setErrorMessage("");
            }
        )
        .catch(
            (err) => {
                console.log(err.response.data);
                setMessage("");
                setErrorMessage("Errors accured in fallowing fields:" + JSON.stringify(err.response.data));
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
                    <h3 className="card-title">Add New Department</h3>

            {message && <div className="alert alert-success" role="alert">{message}</div>}
            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}

            <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-4 row">
                <label htmlFor="deptName" className="col-sm-3 col-form-label">Name:</label>
                <div className="col-sm-8">
                    <div className="col-sm-16"> 
                    <input
                        type="text"
                        className="form-control"
                        id="deptName"
                        name="deptName"
                        value={department.deptName}
                        onChange={handleDepartmentChange}
                        required
                        pattern="[a-zA-Z !@#$%^&*]{2,30}"
                        title="Name should contain min 2 & max chars"/>
                    </div>
                </div>
            </div>

                <button type="submit" className="btn btn-primary">Add Department</button>
            </form>
            </div>
            </div>
        </div>
    </div>
</div>

        </>
    );
}

export default AddDepartment;