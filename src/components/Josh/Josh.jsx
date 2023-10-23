import React, { useEffect, useState } from 'react';
import { JoshMessage, MessageBubble, TalkJosh } from './JoshStyled';

const Josh = ({ message, active, displayTime, showForever }) => {
  const [isVisible, setIsVisible] = useState(active);

  useEffect(() => {
    if (active) {
      // Si el componente está activo y showForever es verdadero, establecer isVisible en true todo el tiempo
      if (showForever) {
        setIsVisible(true);
      } else {
        // Si showForever es falso, establecer isVisible en true durante el tiempo especificado
        setIsVisible(true);

        const timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, displayTime);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [active, displayTime, showForever]);

  return (
    <>
    <div>
    <JoshMessage>
        {isVisible && (
          <>
            <MessageBubble>{message}</MessageBubble>
            <TalkJosh />
          </>
        )}
        {!isVisible && <h1></h1>}
      </JoshMessage>
    </div>

    </>
  );
};

export default Josh;