import Popup from 'reactjs-popup';
import './Popup.css'

const ViewDetails = () => {
  return (
    <Popup trigger={<button>View Details</button>} position="right center">
      {
        close => (<div>
          <div className="popup">
            <div className="popup_header">
              <h1 className="popup_title">Title</h1>
              <h1 className="popupclose_btn" onClick={close}>&times;</h1>
            </div>
            <div className="details">
              <table cellPadding={'6px'}>
                <tr>
                  <td>Venue</td>
                  <td>:</td>
                  <td>Varikattu Hall</td>
                </tr>
                <tr>
                  <td>Time</td>
                  <td>:</td>
                  <td>9:00am</td>
                </tr>
                <tr>
                  <td>Student Coordinator</td>
                  <td>:</td>
                  <td>Antony Thomas</td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>:</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <td>Staff Coordinator</td>
                  <td>:</td>
                  <td>Antony Thomas</td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>:</td>
                  <td>9876543210</td>
                </tr>
              </table>
            </div>
          </div>
        </div>)
      }
    </Popup>
  )
}

export default ViewDetails