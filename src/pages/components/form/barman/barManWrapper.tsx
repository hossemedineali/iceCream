import { useState } from 'react';
import QrCodeReader, { QRCode } from 'react-qrcode-reader';

const BarManWrapper = () => {

    const [val, setVal] = useState<string>('');
    const handleRead = (code: QRCode) => {
        setVal(code.data);
      };
    
  return (
    <div className=" h-screen pt-4">
      <div className="h-64 max-h-[80vh] w-full border">
      <QrCodeReader delay={100} width={500} height={500} onRead={handleRead} />

      </div>
    </div>
  );
};

export default BarManWrapper;
