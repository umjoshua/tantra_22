import Popup from 'reactjs-popup';
import './Popup.css'

const ViewDetails = ({ data }) => {
  return (
    <Popup trigger={<button>View Details</button>} position="right center">
      {
        close => (<div>
          <div className="popup overflow-scroll">
            <div className="popup_header">
              <h1 className="popup_title">{data.name}</h1>
              <h1 className="popupclose_btn" onClick={close}>&times;</h1>
            </div>
            <div className="details">
              <div>Description :</div>
              <p>{data.description}</p>
              <div>Prize :</div>
              <p>{data.prize ? 'Yes' : 'No'}</p>

              <div>Student Coordinators :</div>
              <p>{data.student1} , {data.student2}</p>
              <div>Contact</div>
              <p>{data.s1_phone} , {data.s2_phone}</p>
              <div>Staff Coordinators :</div>
              <p>{data.staff}</p>
            </div>
          </div>
        </div >)
      }
    </Popup >
  )
}

export default ViewDetails