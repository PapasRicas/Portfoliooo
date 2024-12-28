import React, { useEffect, useState } from "react";

interface AsciiHeaderProps {
  name?: string;
  subtitle?: string;
}

const AsciiHeader = ({
  name = "DIEGO BRAVO",
  subtitle = "GAME DEVELOPER & 3D ARTIST",
}: AsciiHeaderProps) => {
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const asciiName = `
               /'                                  /'                                   
             /'                                  /'                                     
     _____,/' O  ____     ____     ____        /'__      ____     ____ .     ,   ____   
   /'    /' /' /'    )  /'    )  /'    )--   /'    )   )'    )--/'    )|    /  /'    )--
 /'    /' /' /(___,/' /'    /' /'    /'    /'    /'  /'       /'    /' |  /' /'    /'   
(___,/(__(__(________(___,/(__(___,/'     (___,/(__/'        (___,/(___|/(__(___,/'     
                        /'                                                              
                /     /'                                                                
               (___,/'                                                                  
  `;

  useEffect(() => {
    if (isTyping) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= subtitle.length) {
          setDisplayedSubtitle(subtitle.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [subtitle, isTyping]);

  return (
    <div className="w-full bg-black p-8 border-b-2 border-green-500">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        <pre className="font-mono text-green-500 text-center whitespace-pre-wrap overflow-hidden">
          {asciiName}
        </pre>

        <div className="font-mono text-xl text-green-500">
          {displayedSubtitle}
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
};

export default AsciiHeader;
