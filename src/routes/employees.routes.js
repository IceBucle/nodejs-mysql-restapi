import { Router } from 'express'
import { deleteEmployee, getEmployees, getEmployee, createEmployee, updateEmployeeAll, updateEmployee } from '../controllers/employees.controllers.js'

const router = Router()

router.get("/employees", getEmployees)

router.get("/employees/:id", getEmployee)

router.post("/employees", createEmployee)

router.put("/employees/:id", updateEmployeeAll)

router.patch("/employees/:id", updateEmployee)

router.delete("/employees/:id", deleteEmployee)

export default router