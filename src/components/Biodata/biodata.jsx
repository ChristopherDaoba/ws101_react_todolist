import './biodata.css';

function Biodata(props){
    return(
        <div id ="main">
        <h1 className='title'>Activity 2: BIODATA USING REACT</h1>
        <h2>Name: {props.name}{props.lastname}</h2>
        <p>Mobile No. {props.Mobile_no}</p>
        <p>Email Add: {props.Email_Add}</p>
        <p>Gender: {props.Gender}</p>
        <p>Birth Date: {props.Birth_date}</p>
        <p>Father's Name: {props.Father_name}</p>
        <p>Mother's Name: {props.Mother_name}</p>
        <p>HighSchool: {props.HighSchool}</p>
        <p>College: {props.College}</p>

        </div>
    )
}
export default Biodata;