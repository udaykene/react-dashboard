const Appointments = () => {
  return (
    <div className="admin-page">
      <h1>Appointments</h1>

      <p>
        View and manage appointments related to emergency assistance,
        counselling sessions, and support services.
      </p>

      <div className="appointments-list">
        <div className="appointment-item">
          <p><strong>User:</strong> Ananya Sharma</p>
          <p><strong>Type:</strong> Emergency Support</p>
          <p><strong>Date:</strong> 27 Jan 2026</p>
        </div>

        <div className="appointment-item">
          <p><strong>User:</strong> Pooja Patil</p>
          <p><strong>Type:</strong> Counselling</p>
          <p><strong>Date:</strong> 28 Jan 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
