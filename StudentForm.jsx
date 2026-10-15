
import { useState } from "react";

const StudentForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentName = name.trim();
    const className = studentClass.trim();
    const numericScore = Number(score);

    // Kiểm tra dữ liệu
    if (!studentName || score.trim() === "" || !className) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (
      !Number.isFinite(numericScore) ||
      numericScore < 0 ||
      numericScore > 10
    ) {
      setError("Điểm phải nằm trong khoảng từ 0 đến 10!");
      return;
    }

    // Gửi dữ liệu lên App
    onAdd({
      name: studentName,
      score: numericScore,
      class: className
    });

    // Reset form
    setName("");
    setScore("");
    setStudentClass("");
    setError("");
  };

  return (
    <div className="form-box">
      <h2>Thêm sinh viên mới</h2>

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          step="any"
          placeholder="Điểm số (0 - 10)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <input
          type="text"
          placeholder="Lớp"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Thêm sinh viên</button>
      </form>
    </div>
  );
};

export default StudentForm;
