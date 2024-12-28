import React, { useState, useEffect } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Terminal, ChevronDown, Code, Cpu, Gamepad2 } from 'lucide-react';
import AsciiHeader from './AsciiHeader';
import SideNavigation from './SideNavigation';
import ProjectsGrid from './ProjectsGrid';
import TerminalContactForm from './TerminalContactForm';

interface HomeProps {
  userName?: string;
  userTitle?: string;
  activeSection?: string;
}

const Home = ({
  userName = 'DIEGO BRAVO',
  userTitle = 'GAME DEVELOPER & 3D ARTIST',
  activeSection = 'Home'
}: HomeProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const introLines = [
    '> Initializing system...',
    '> Loading profile...',
    '> Welcome to my portfolio terminal',
    '> Accessing main directory...'
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeSection]);

  useEffect(() => {
    if (currentLine < introLines.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + '\n' + introLines[currentLine]);
        setCurrentLine(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  const renderMainContent = () => {
    switch (activeSection) {
      case 'Home':
        return (
          <div className="space-y-24">
            {/* Hero Terminal */}
            <div className="min-h-[60vh] flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <div className="w-full max-w-4xl space-y-8 relative z-10">
                <div className="bg-black border-2 border-green-500 p-6 rounded-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <Terminal className="h-5 w-5 text-green-500" />
                    <span className="text-green-500 font-mono">portfolio.exe</span>
                  </div>
                  <pre className="font-mono text-green-500 whitespace-pre-line">
                    {displayedText}
                    <span className="animate-pulse">_</span>
                  </pre>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Gamepad2 className="h-8 w-8" />,
                      title: 'Game Design',
                      desc: 'I do silly little games'
                    },
                    {
                      icon: <Code className="h-8 w-8" />,
                      title: 'Game Development',
                      desc: 'thats what my title says'
                    },
                    {
                      icon: <Cpu className="h-8 w-8" />,
                      title: 'Technical Artist',
                      desc: 'I do games... AND ART'
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-black border-2 border-green-500/50 p-6 rounded-lg hover:border-green-500 transition-colors group">
                      <div className="text-green-500 mb-4 group-hover:scale-110 transform transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-green-500 font-mono text-lg mb-2">{item.title}</h3>
                      <p className="text-green-500/70 font-mono text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <section className="min-h-screen py-16 px-8 relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <div className="max-w-6xl mx-auto space-y-12 relative z-10">
                <div className="space-y-4">
                  <h2 className="font-mono text-3xl text-green-500">> Featured Projects</h2>
                  <p className="font-mono text-green-500/70 max-w-2xl">
                    Here are some of my most interesting projects related to game development.
                    Each project is a unique chaos and the willing to die.
                  </p>
                </div>

                <ProjectsGrid featuredOnly={true} />

                <div className="flex justify-center pt-8">
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-500/100"
                    onClick={() => window.location.href = '/projects'}
                  >
                    <Terminal className="h-4 w-4 mr-2" />
                    View All Projects
                  </Button>
                </div>
              </div>
            </section>

            {/* Quick Contact */}
            <section className="min-h-[50vh] py-16 px-8 relative">
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
                <h2 className="font-mono text-3xl text-green-500">> Get In Touch</h2>
                <p className="font-mono text-green-500/70">
                  Interested in collaborating? Let's build something amazing together.
                </p>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500/100"
                  onClick={() => window.location.href = '/contact'}
                >
                  <Terminal className="h-4 w-4 mr-2" />
                  Open Contact Terminal
                </Button>
              </div>
            </section>
          </div>
        );

      case 'Projects':
        return (
          <div className="p-8 min-h-screen relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="max-w-6xl mx-auto space-y-8">
              <h2 className="font-mono text-2xl text-green-500">> All Projects</h2>
              <ProjectsGrid />
            </div>
          </div>
        );

      case 'About':
        return (
          <div className="p-8 min-h-screen relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="font-mono text-2xl text-green-500">> About Me</h2>
              <div className="bg-black border-2 border-green-500 p-6 rounded-lg">
                <pre className="font-mono text-green-500 whitespace-pre-wrap">
                  {`> Initializing bio.txt...

SOME GOOD SHIT IM THE BEST AAAAAAAAAAHAHAAAAAAA

Skills:
- Sex (i lied)
- Tea consumer
- Bomb maker

Experience:
- 55+ years of bomb development
- 3+ years of virgin development
- Multiple no fucks givin

> End of file`}
                </pre>
              </div>
            </div>
          </div>
        );

      case 'Contact':
        return (
          <div className="p-8 min-h-screen relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="flex flex-col items-center">
              <h2 className="font-mono text-2xl text-green-500 mb-8">> Contact Terminal</h2>
              <TooltipProvider>
                <TerminalContactForm />
              </TooltipProvider>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      <SideNavigation activeItem={activeSection} />
      
      <main className="flex-1 flex flex-col ml-[200px]">
        <AsciiHeader 
          name={userName}
          subtitle={userTitle}
        />
        <div className="flex-1 overflow-y-auto relative">
          {renderMainContent()}
        </div>
      </main>
    </div>
  );
};

export default Home;