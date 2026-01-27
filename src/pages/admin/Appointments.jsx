function Appointments() {
  const appointments = [
    { id: 1, name: 'Uday Kene', date: '2026-01-28', time: '10:00 AM', status: 'confirmed' },
    { id: 2, name: 'Prapti Tembhe', date: '2026-01-28', time: '11:30 AM', status: 'pending' },
    { id: 3, name: 'Priyansh Shigwan', date: '2026-01-29', time: '02:00 PM', status: 'confirmed' },
    { id: 4, name: 'Payal Kor', date: '2026-01-29', time: '03:30 PM', status: 'cancelled' },
    { id: 5, name: 'Naveen Jadhav', date: '2026-01-30', time: '09:00 AM', status: 'confirmed' },
    { id: 6, name: 'Ishaan Joshi', date: '2026-01-30', time: '01:00 PM', status: 'pending' },
    { id: 7, name: 'Vighnesh Patil', date: '2026-01-31', time: '10:30 AM', status: 'confirmed' },
    { id: 8, name: 'Shravan Bhoir', date: '2026-01-31', time: '04:00 PM', status: 'pending' },
  ]

  const getStatusClass = (status) => {
    switch(status) {
      case 'confirmed':
        return 'status-confirmed'
      case 'pending':
        return 'status-pending'
      case 'cancelled':
        return 'status-cancelled'
      default:
        return ''
    }
  }

  return (
    <div className="appointments-container">
      <h1>Appointments Management</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        View and manage all upcoming appointments
      </p>
      
      <div className="appointments-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(appointment.status)}`}>
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Appointments
