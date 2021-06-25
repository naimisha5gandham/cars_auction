import React from 'react';
import "./latest.css"
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
      <div className="cont">
        <h1 style={{textAlign: 'center'}}>LATEST NEWS</h1>
          <li className="list">
    <MDBCard className="carcard" >
      <MDBRow >
        <MDBCol md='4'>
          <MDBCardImage className="newsimg" src='data:image/jpeg;base64,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' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Tesla Model S</MDBCardTitle>
            <MDBCardText>
             Expected Price: $2,02,280
            </MDBCardText>
          
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <br/>
    <MDBCard  className="carcard" >
      <MDBRow >
        <MDBCol md='4'>
          <MDBCardImage className="newsimg2" src='https://cdn.vox-cdn.com/thumbor/rQXInA4ZDlTkogUjk8dwXA0gIOc=/0x0:2040x1360/1200x675/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65735121/audi_etron_sportback_6565.5.jpg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Audi e-tron</MDBCardTitle>
            <MDBCardText>
            Expected Price: $1,61,823
            </MDBCardText>
           
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <br/>
    <MDBCard  className="carcard" >
      <MDBRow >
        <MDBCol md='4'>
          <MDBCardImage src='https://cdn.motor1.com/images/mgl/wGGBE/s3/bmw-x6-m50d-by-fostla.jpg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>BMW X6 M50d</MDBCardTitle>
            <MDBCardText>
           Expected Price: $2,00,912
            </MDBCardText>
          
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </li>
    </div>
  );
}