import axios from 'axios'


//api i created in intellij

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService{

    getAllEmployess(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
}

export default new EmployeeService();