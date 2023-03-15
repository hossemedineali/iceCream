import { useState } from "react";
import { useZxing } from "react-zxing";

const BarManStep1 = () => {
    const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });
    return ( <div className="bg-black w-full h-full">
<video ref={ref} />
    </div> );
}
 
export default BarManStep1;