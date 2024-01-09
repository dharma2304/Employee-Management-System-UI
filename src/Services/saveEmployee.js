import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/employees";
function saveEmployee(employeeData) {
  return axios.post(BASE_URL, employeeData);
}

export { saveEmployee };
