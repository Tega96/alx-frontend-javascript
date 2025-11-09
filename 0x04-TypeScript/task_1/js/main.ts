
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [contract: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
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

const directorEmeka: Director = {
    firstName: "Emeka",
    lastName: "Nnamani",
    fullTimeEmployee: true,
    location: "Lagos",
    contract: true,
    numberOfReports: 17,
}

console.log(directorEmeka)
console.log(directorEmeka.numberOfReports)