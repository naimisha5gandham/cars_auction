import React from 'react';
import "./style2.css"
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
      <div className="container">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
          className="carimg"
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
            alt='...'
            position='top'
          />
          
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
          className="carimg"
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/043.jpg'
            alt='...'
            position='top'
          />
          
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
          className="carimg"
            src='https://mdbcdn.b-cdn.net/img/new/standard/city/042.jpg'
            alt='...'
            position='top'
          />
         
        </MDBCard>
      </MDBCol>
     

    </MDBRow>
    </div>
  );
}