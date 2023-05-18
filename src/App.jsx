import React, {useEffect, useState} from "react";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode"
import { Container } from "./style";


function App() {
  const [Link, setLink] = useState(``)
  const [qrCode, setQrcode] = useState(``)

  function HandleGeneratorQrcodeLink(link) {
    QRCodeLink.toDataURL(link, {
      width: 600,
      margin: 3,

    }, function(err, url) {
      setQrcode(url)
    })
      
  }

  function handleQrCode(e) {
    setLink(e.target.value)
    HandleGeneratorQrcodeLink(e.target.value)
  }
  
  return (
    <>
    <Container>

      <QRCode
        value={Link}
      />
      <input placeholder="Digite a url...."
      value={Link}
      onChange={(e) => handleQrCode(e)}
      />
      <a href={qrCode} download={`QrCode.png`}>Baixar QrCode</a>
    </Container>
    
    </>
  );
}

export default App;
