import React from 'react';
import "./stylea.css"
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (<div>
      <div className="audi1cont">
    <MDBCard className="audi1">
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage className="audi1img" src='https://robbreport.com/wp-content/uploads/2020/07/6-3.jpg?w=1000' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Lamborghini Urus</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
    <div className="audi1cont">
    <MDBCard className="audi1">
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage className="audi1img" src='https://cdni.autocarindia.com/ExtraImages/20180306035018_lambo-spider-2065.jpg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Lamborghini Huracan</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
    <div className="audi1cont">
    <MDBCard className="audi1">
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage className="audi1img" src='https://stat.overdrive.in/wp-content/odgallery/2019/02/50066_2019_Lamborghini_huracan_evo_2_468x263.jpg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Lamborghini Aventador</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
    <div className="audi1cont">
    <MDBCard className="audi1">
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage className="audi1img" src='https://www.wardsauto.com/sites/wardsauto.com/files/Lamborghini%20Sian.jpg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Lamborghini Gallardo</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
    </div>
  );
}