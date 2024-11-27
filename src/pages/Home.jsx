import React, { useState, useEffect } from "react";
import { fetchMessages } from "../api/inbox"; // Backend API for messages
import styles from "./Home.module.css";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Fetch messages from the backend on component mount
  useEffect(() => {
    const loadMessages = async () => {
      const fetchedMessages = await fetchMessages();
      setMessages(fetchedMessages || []);
    };
    loadMessages();
  }, []);

  const handleMessageClick = (id) => {
    const message = messages.find((msg) => msg.id === id);
    setSelectedMessage(message);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMessage(null);
  };

  return (
    <div className={`container mt-4 ${styles.container}`}>
      <h4 className={styles.header}>LOQUE, MARK FUCKINGBERN (20222-61615-MN-0)</h4>
      <div className="row mt-3">
        {/* Left Section */}
        <div className="col-md-3">
          <div className={styles.leftMenu}>
            <a href="#" className={styles.menuItem}>
              Inbox ({messages.length})
            </a>
            <a href="#" className={styles.menuItem}>
              Graduation Clearance
            </a>
            <a href="#" className={styles.menuItem}>
              Submit Feedback
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className={`card ${styles.mainCard}`}>
            {/* Memorandum Section */}
            <div className={`card-body ${styles.memoSection}`}>
              <div className={styles.memoIcon}>
                <i className="bi bi-file-earmark-arrow-down"></i>
              </div>
              <div className={styles.memoDetails}>
                <a
                  href="/files/CvSU Internship MOA.docx"
                  download
                  className={styles.memoLink}
                >
                  CvSU Internship Memorandum of Agreement
                </a>
                <p className={styles.memoUpdate}>Last updated: November 25, 2024</p>
              </div>
            </div>
          </div>

          {/* Inbox Section */}
          <div className={styles.inboxSection}>
            <table className={`table ${styles.inboxTable}`}>
              <thead>
                <tr>
                  <th scope="col">Inbox</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message.id} onClick={() => handleMessageClick(message.id)}>
                    <td className={styles.inboxMessage}>
                      <i className="bi bi-envelope-fill text-danger me-2"></i>
                      {message.title}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedMessage && (
        <div
          className="modal show fade"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedMessage.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedMessage.content}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
