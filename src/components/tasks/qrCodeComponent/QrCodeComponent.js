import './qrCodeComponent.scss';


const QrCodeComponent = () => {
    return (
        <div className='qrCodeComponent'>
            <div className="container">
                <div className="qrcode">
                    <div className="qrcode-items">
                        <div className="qrcode-items-item">
                            <img src="./images/image-qr-code.png" alt="qrcode" />
                        </div>
                        <div className="qrcode-items-item">
                            <p className='title'>Improve your front-end skills by building projects</p>
                            <p className='description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QrCodeComponent;