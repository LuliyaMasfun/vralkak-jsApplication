import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar'
import Progressbar from '../../Progressbar/Progressbar';
import sweFlag from '../../assets/sweflag.png'
import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css';


export const Delivery = () => {
  
 const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
    <Navbar />
    <Progressbar />
    
    <form style={{  //Form
      backgroundColor: "#F4F4F4",
      display: "grid",
      position: "absolute",
      top: "145px",
      height: "1162px",
      width: "390px"
    }}> 
    <span style={{ //Title
      position: "absolute",
      top:"40px",
      left: "32px",
      fontSize: "36px",
      fontWeight: "600"
    }} >Dina Uppgifter</span>
   
        <p style={{ 
          position: "absolute",
          top:"112px",
          left: "32px",
        }} >Förnamn*</p>

        <input style={{
          width: "326px",
          height: "48px",
          position: "absolute",
          top: "152px",
          left: "32px",
          boxSizing: "border-box",
          border: "1px solid black",

        }} />

        <p style={{
          position: "absolute",
          top:"200px",
          left: "32px"
        }} >Efternamn*</p>

        <input style={{
          width: "326px",
          height: "48px",
          position: "absolute",
          top: "240px",
          left: "32px",
          boxSizing: "border-box",
          border: "1px solid black",
        }}/>
      

      <p style={{
        position: "absolute",
        top:"288px",
        left: "32px"
      }}>Gatuaddress*</p>

      <input style={{
        width: "326px",
        height: "48px",
        position: "absolute",
        top: "328px",
        left: "32px",
        boxSizing: "border-box",
        border: "1px solid black",
      }} />
      

      <p style={{
        position: "absolute",
        top:"376px",
        left: "32px"
      }}>Postnummer*</p>

      <input style={{
        width: "155px",
        height: "48px",
        position: "absolute",
        top: "416px",
        left: "32px",
        boxSizing: "border-box",
        border: "1px solid black",
      }}/>
      

      <p style={{
        position: "absolute",
        top:"376px",
        left: "203px",
      }}>Ort*</p>

      <input style={{
        width: "155px",
        height: "48px",
        position: "absolute",
        top: "416px",
        left: "203px",
        boxSizing: "border-box",
        border: "1px solid black",
      }}/>
      

      <p style={{
        position: "absolute",
        top: "464px",
        left: "32px",
      }} >Mobilnummer</p>
      <img 
       src={sweFlag} 
       className="sweFlag"
       style={{
         position: "absolute",
         top: "504px",
         left: "28px"
       }}/>
      <input type="number" 
      style={{
        width: "277px",
        height: "48px",
        position: "absolute",
        top: "504px",
        left: "81px",
        border: "solid 1px black",
        boxSizing: "border-box",
      }}/>

      <p style={{
        position: "absolute",
        top:"550px",
        left: "32px",
        fontSize: "36px",
        fontWeight: "600"
      }}>Välj leverans</p>

      <DatePicker 
      selected={selectedDate} 
      onChange={selectedDate => setSelectedDate(selectedDate)}
      minDate={new Date()}
      dateFormat="dd/MM/yyyy"
      className="datePicker"
      
      
      
      
      
      />

    
    <select name="deliveryWay" style={{
      position: "absolute",
      top:"763px",
      left: "32px",
      width: "326px",
      height: "48px",
      border: "solid 1px black",
      boxSizing: "border-box",
    }}>
    <option value="volvo"
    disabled selected hidden
    >Välj leveransalternativ</option>

    <option value="Hemleverans">Hemleverans</option>
    <option value="PostNord">PostNord</option>
    <option value="InstaBox">InstaBox</option>
    </select>

    <p style={{
      fontWeight: "normal",
      fontSize: "12px",
      position: "absolute",
      top: "839px",
      left: "32px",
    }}>Övrig information till chauförren(frivilligt)</p>
      
    <textarea type="text" 
    placeholder='Övrig information' 
    style={{
      width: "326px",
      height: "112px",
      position: "absolute",
      top: "891px",
      left: "32px",
      boxSizing: "border-box",
      border: "1px solid black",
      fontFamily: "'Outfit'",
      paddingTop:"10px",
      paddingLeft:"10px"
    }} />

    <button style={{
      width:"326px",
      height:"50px",
      position: "absolute",
      top: "1031px",
      left: "32px",
      boxSizing:"border-box",
      border: "1px solid #1F1E1F",
      backgroundColor: "#1F1E1F",
      color: "white",
      fontWeight: "500",
      fontSize: "20px"
    }} >Fortsätt</button>
    </form>
    </>
  )
}
