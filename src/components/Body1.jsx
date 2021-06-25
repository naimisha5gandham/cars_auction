import React from 'react';
import "./style1.css";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol,MDBCardGroup } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="container">
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
         
          <MDBCardBody>
            <MDBCardTitle className="audi">AUDI Q5 Premium</MDBCardTitle>
            <MDBCardText className="intro">
            Capitalize on low hanging fruit to identify a ballpark.
            <br/>
            <div className="bid">
            Current bid:
            </div> <h3 className="dollar"> $5555</h3>
            <br/>
            <button className="btn">PLACE BID NOW</button>
            </MDBCardText>
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
      <div className="naimi">
          <MDBCardImage
          className="img"
            src='https://images.caricos.com/a/audi/2016_audi_r8_v10/images/1920x1080/2016_audi_r8_v10_16_1920x1080.jpg'
            alt='...'
            position='right'
          />
         </div>
         
       
    </MDBRow>
    <br/>
    <br/>
   <div >
   <MDBCardGroup>
      <MDBCard className="service">
        <MDBCardImage className="icon1" src='https://cdn.pixabay.com/photo/2017/01/25/00/47/call-center-2006867_960_720.png' alt='...' position='left' />
        <MDBCardBody>
          <MDBCardTitle>Call Center <br/><small className='text-muted'>Completely synergize</small></MDBCardTitle>
          
        </MDBCardBody>
       
      </MDBCard>

      <MDBCard className="track">
        <MDBCardImage className="icon" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStIiwJ7oQt80gYVZajuO5olvyzkLYUpnif1JRVF7CItuGSoqE5VH-hOimZ28yNK2dfOU&usqp=CAU' alt='...' position='left' />
        <MDBCardBody>
          <MDBCardTitle>Order Tracking<br/>
          <small className='text-muted'>Objectively empowered</small>
          </MDBCardTitle>
          
        </MDBCardBody>
        
      </MDBCard>

      <MDBCard className="fast">
        <MDBCardImage className="icon" src='https://media.istockphoto.com/vectors/fast-worldwide-delivery-icon-quick-shipping-transportation-vector-id1201300757?b=1&k=6&m=1201300757&s=612x612&w=0&h=0ecCI6_58WAFhFLvxQMGBfv9rUnjOjdvyUFog6c0sdM=' alt='...' position='left' />
        <MDBCardBody>
          <MDBCardTitle>Fastest Delivery <br/><small className='text-muted'>Efficiently unleash media</small></MDBCardTitle>
          
        </MDBCardBody>
        
      </MDBCard>
      <MDBCard className="cash">
        <MDBCardImage className="icon" src='https://media.istockphoto.com/vectors/online-shopping-icon-blue-color-ecommerce-buying-vector-id1225849521?k=6&m=1225849521&s=170667a&w=0&h=Ymu_WElN_9i7l5UNJK74xij3zz_ajn_6r5czt12p204=' alt='...' position='left' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
        
        </MDBCardBody>
      
      </MDBCard>
    </MDBCardGroup>
   </div>

              
        
    </div>
  );
}