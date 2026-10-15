
import { useState } from "react";
import StudentForm from "./StudentForm.jsx";
import StudentList from "./StudentList.jsx";
import "./App.css";


const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Nguyễn Văn An", score: 9, class: "D25CQCN01" },
    { id: 2, name: "Trần Thị Bình", score: 7, class: "D25CQCN02" },
    { id: 3, name: "Lê Văn Cường", score: 4, class: "D25CQCN03" }
  ]);

  const [filter, setFilter] = useState("all");

  // Thêm sinh viên
  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: Date.now()
    };

    setStudents(prev => [...prev, newStudent]);
  };

  // Xóa sinh viên
  const deleteStudent = (id) => {
    setStudents(prev =>
      prev.filter(student => student.id !== id)
    );
  };

  // Lọc danh sách
  const filteredStudents = students.filter(student => {
    if (filter === "excellent") return student.score >= 8;
    if (filter === "failed") return student.score < 5;
    return true;
  });

  // Thống kê
  const totalStudents = students.length;

  const totalScore = students.reduce(
    (sum, student) => sum + student.score,
    0
  );

  const averageScore =
    totalStudents > 0
      ? (totalScore / totalStudents).toFixed(2)
      : "0.00";

  return (
    <div className="container">
      <h1>QUẢN LÝ ĐIỂM SINH VIÊN</h1>

      <StudentForm onAdd={addStudent} />

      <div className="statistics">
        <h2>Thống kê lớp học</h2>
        <p>Tổng số sinh viên: <b>{totalStudents}</b></p>
        <p>Điểm trung bình: <b>{averageScore}</b></p>
      </div>

      <div className="filter">
        <h2>Lọc sinh viên</h2>

        <button onClick={() => setFilter("all")}>
          Tất cả
        </button>

        <button onClick={() => setFilter("excellent")}>
          Sinh viên giỏi (≥ 8)
        </button>

        <button onClick={() => setFilter("failed")}>
          Sinh viên trượt (&lt; 5)
        </button>
      </div>

      <StudentList
        students={filteredStudents}
        onDelete={deleteStudent}
      />
    </div>
  );
};

export default App;
