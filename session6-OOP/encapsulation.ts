// encapsulation = membungkus setiap proses

class Employee {
    employeeName = ""

    setEmployeeName(str: string) {
        this.employeeName = str
    }

    getEmployeeName() {
        return this.employeeName
    }
}

const employee1 = new Employee()

employee1.setEmployeeName("Wildan")

console.log(employee1.getEmployeeName())