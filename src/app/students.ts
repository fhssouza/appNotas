export interface IStudent {
    registration: number;
    student: string;
    note01: number;
    note02: number;
}


export const students: IStudent[] = [
    { registration: 1, student: "Fábio Souza", note01: 10.0, note02: 9.5},
    { registration: 2, student: "Fabricio Souza", note01: 8.0, note02: 9.5},
    { registration: 3, student: "Maria Fernanda", note01: 5.0, note02: 3.5},
    { registration: 4, student: "Deyvid Andrade", note01: 10.0, note02: 8.5},
    { registration: 5, student: "Karla Souza", note01: 6.0, note02: 3.5}
]