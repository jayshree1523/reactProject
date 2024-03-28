import { axiosInstance } from "./axios-http-client"
class DepartmentService{
    getAllDepartments(){
        return axiosInstance.get('http://localhost:8090/departments');
    }
    deleteDepartmentById(id){
        return axiosInstance.delete('http://localhost:8090/department/'+id);
    }

    addDepartment(department){
        return axiosInstance.post('http://localhost:8090/add/department',department);
    }
    updateDepartment(department){
        return axiosInstance.put('http://localhost:8090/department',department);
    }
}

export default new DepartmentService();