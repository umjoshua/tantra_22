import Popup from 'reactjs-popup';
import './Popup.css'

const ViewDetails = ({data}) => {
  return (
    <Popup trigger={<button>View Details</button>} position="right center">
      {
        close => (<div>
          <div className="popup">
            <div className="popup_header">
              <h1 className="popup_title">{data.name}</h1>
              <h1 className="popupclose_btn" onClick={close}>&times;</h1>
            </div>
            <div className="details">
              <table cellPadding={'6px'}>
                <tr>
                  <td>Description</td>
                  <td>:</td>
                  <td>{data.description}</td>
                </tr>
                <tr>
                  <td>Student Coordinators</td>
                  <td>:</td>
                  <td>{data.student1}, {data.student2 }</td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>:</td>
                  <td>{data.s1_phone} , {data.s2_phone}</td>
                </tr>
                <tr>
                  <td>Staff Coordinators</td>
                  <td>:</td>
                  <td>{data.staff}</td>
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