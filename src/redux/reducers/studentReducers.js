import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      id: 1,
      fullName: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "+1234567890",
      instance: "React Academy",
      createdAt: "2023-08-01",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "janesmith@example.com",
      phoneNumber: "+1234567891",
      instance: "Vue Academy",
      createdAt: "2023-08-02",
    },
    {
      id: 3,
      fullName: "Alice Johnson",
      email: "alicejohnson@example.com",
      phoneNumber: "+1234567892",
      instance: "Angular Bootcamp",
      createdAt: "2023-08-03",
    },
    {
      id: 4,
      fullName: "Bob Brown",
      email: "bobbrown@example.com",
      phoneNumber: "+1234567893",
      instance: "Node.js Academy",
      createdAt: "2023-08-04",
    },
    {
      id: 5,
      fullName: "Charlie White",
      email: "charliewhite@example.com",
      phoneNumber: "+1234567894",
      instance: "React Academy",
      createdAt: "2023-08-05",
    },
  ],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push({ ...action.payload, id: Date.now() });
    },
    editStudent: (state, action) => {
      const index = state.students.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;

// Tambahkan selector untuk menghitung statistik
export const selectTotalStudents = (state) => state.student.students.length;
export const selectStudentsByInstance = (state) => {
  const instanceCounts = {};
  state.student.students.forEach((student) => {
    instanceCounts[student.instance] =
      (instanceCounts[student.instance] || 0) + 1;
  });
  return instanceCounts;
};

export default studentSlice.reducer;
