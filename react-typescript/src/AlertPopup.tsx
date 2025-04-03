import { useEffect, useState } from "react";
import "./AlertPopup.scss";

function AlertPopup({ message }: { message: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
    }
  }, [message]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="pop-up">
        <div id="message">{message}</div>
        <button className="close-btn" onClick={handleClose}>
          ❌
        </button>
      </div>
    )
  );
}

export default AlertPopup;
