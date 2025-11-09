
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [contract: string]: any;
}

const teacher: Teacher = {
    firstName: "John",
    lastName: "Agamu", 
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Abuja",
    contract: true
}

console.log(teacher)
console.log(teacher.firstName)