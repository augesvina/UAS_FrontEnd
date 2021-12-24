// Footer.js
import react from "react";
import styled from 'styled-components';

const footer = () => {
  return(
    <FooterContainer className="main-footer">
      <div className="container">
        <div className="row">

          <div className="col">
            <h4>WUNDERBAR</h4>
            <h1 className="list-unstyled">
              <li>Jakarta Selatan, Indonesia</li>
              <li>SCBD</li>
            </h1>
          </div>

          <div className="col">
            <h4>Connect</h4>
            <ui className="list-unstyled">
            <a><li>Media Sosial</li></a>
            <a><li>Alamat</li></a>
            <a><li>Kode Pos</li></a>
            </ui>
          </div>
        </div>
        <hr />
      </div>
    </FooterContainer>
  );
}

export default footer;

const FooterContainer = styled.footer`
.container {
  background: #212529;
} 

.col{
  color: white;
  padding-top: 3em;
  position: relative;
  bottom: 0;
  width: 100%;
}`;