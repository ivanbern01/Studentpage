import React from "react";
import styles from "./Accounts.module.css";

const Account = () => {
  const data = [
    {
      schoolYear: "2324",
      semester: "First Semester",
      scholarship: "TOTAL AMOUNT DUE",
      orDate: "00/00/0000",
      orNo: "TOTAL AMOUNT DUE",
      assessment: "7,745.00",
      payment: "0.00",
      balance: "7,745.00",
    },
    {
      schoolYear: "2324",
      semester: "First Semester",
      scholarship: "CASH - Free Education (20230727-000423)",
      orDate: "00/00/0000",
      orNo: "CASH - Free Education (20230727-000423)",
      assessment: "0.00",
      payment: "7,745.00",
      balance: "0.00",
    },
    {
      schoolYear: "2324",
      semester: "Second Semester",
      scholarship: "TOTAL AMOUNT DUE",
      orDate: "00/00/0000",
      orNo: "TOTAL AMOUNT DUE",
      assessment: "8,189.00",
      payment: "0.00",
      balance: "8,189.00",
    },
    {
      schoolYear: "2324",
      semester: "Second Semester",
      scholarship: "CASH - Free Education (20240303-000764)",
      orDate: "03/03/2024",
      orNo: "CASH - Free Education (20240303-000764)",
      assessment: "0.00",
      payment: "8,189.00",
      balance: "0.00",
    },
    {
      schoolYear: "2425",
      semester: "First Semester",
      scholarship: "TOTAL AMOUNT DUE",
      orDate: "00/00/0000",
      orNo: "TOTAL AMOUNT DUE",
      assessment: "6,282.00",
      payment: "0.00",
      balance: "6,282.00",
    },
    {
      schoolYear: "2425",
      semester: "First Semester",
      scholarship: "CASH - Free Education (20240829-000272)",
      orDate: "08/29/2024",
      orNo: "CASH - Free Education (20240829-000272)",
      assessment: "0.00",
      payment: "6,282.00",
      balance: "0.00",
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>School Year</th>
            <th>Semester</th>
            <th>Scholarship</th>
            <th>O.R. Date</th>
            <th>O.R. No.</th>
            <th>Assessment</th>
            <th>Payment</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.schoolYear}</td>
              <td>{row.semester}</td>
              <td>{row.scholarship}</td>
              <td>{row.orDate}</td>
              <td>{row.orNo}</td>
              <td>{row.assessment}</td>
              <td>{row.payment}</td>
              <td>{row.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Account;