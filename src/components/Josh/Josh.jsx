import React, { useEffect, useState } from 'react';
import { JoshMessage, MessageBubble, TalkJosh } from './JoshStyled'

const Josh = ({message, active}) => {
    const [isVisible, setIsVisible] = useState(active);


    useEffect(() => {
      if (active) {
        // Si el componente está activo, establecer isVisible en true durante 3 segundos
        setIsVisible(true);

        const timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
  
        return () => clearTimeout(timeoutId);
      }
    }, [active]);


    return (
        <>  
        <JoshMessage>
            {isVisible && (
                    <>
                    <MessageBubble>
                        {message}
                    </MessageBubble> 
                    <TalkJosh/>
                    </>              
            )}
            {
                !isVisible && <h1></h1>
            }
        </JoshMessage>
        </>
    );
}

export default Josh;
