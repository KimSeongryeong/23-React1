import React from "react";

const students = [
    {
        id : 1,
        name: "Inje",
    },
    {
        id : 2,
        name: "Steve",
    },
    {
        id : 3,
        name: "Bill",
    },
    {
        id : 4,
        name: "Jeff",
    }
];

function AttendanceBook(props) {
    return (
        <ui>
            {students.map((student) => {
                return<li>key={student.id}{student.name}</li>;
            })}
        </ui>
    );
}

export default AttendanceBook;