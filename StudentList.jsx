import StudentItem from "./StudentItem.jsx";

const StudentList = ({ students, onDelete }) => {
  return (
    <div className="list-box">
      <h2>Danh sách sinh viên</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Điểm</th>
            <th>Lớp</th>
            <th>Xếp loại</th>
            <th>Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="6">
                Không có sinh viên nào!
              </td>
            </tr>
          ) : (
            students.map(student => (
              <StudentItem
                key={student.id}
                student={student}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
