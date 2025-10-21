"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Projects from "@/components/Projects"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='min-h-screen bg-background'>
      {/* Navigation */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          {/* Desktop Navigation */}
          <nav className='hidden md:flex gap-8'>
            <a href='#home' className='hover:text-primary transition-colors'>
              Home
            </a>
            <a href='#about' className='hover:text-primary transition-colors'>
              About
            </a>
            <a
              href='#projects'
              className='hover:text-primary transition-colors'
            >
              Projects
            </a>
            <a href='#contact' className='hover:text-primary transition-colors'>
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className='md:hidden flex flex-col items-center py-4 bg-background border-b'>
            <a
              href='#home'
              className='py-2 hover:text-primary'
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href='#about'
              className='py-2 hover:text-primary'
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href='#projects'
              className='py-2 hover:text-primary'
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href='#contact'
              className='py-2 hover:text-primary'
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          id='home'
          className='min-h-screen flex items-center justify-center pt-16'
        >
          <div className='container mx-auto px-4 flex flex-col items-center text-center'>
            <div className='mb-6 relative'>
              <Image
                src='/Portfolio-img.jpg'
                alt='Profile Picture'
                width={180}
                height={180}
                className='rounded-full border-4 border-primary/20 hover:scale-105 transition-transform'
              />
              <div className='absolute inset-0 rounded-full bg-primary/10 animate-pulse'></div>
            </div>

            <h1 className='text-5xl md:text-6xl font-bold mb-4'>
              Jabari Robinson
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl'>
              Computer science student passionate about software development and
              engineering.
            </p>

            <div className='flex gap-5'>
              <Button variant='default' size='lg' asChild>
                <a href='#projects'>View Projects</a>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <a href='#contact'>Contact Me</a>
              </Button>
              <Button variant='ghost' size='lg' asChild>
                <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
                  Download Resume
                </a>
              </Button>
            </div>

            <div className='flex gap-4 mt-8'>
              <Button
                variant='outline'
                size='icon'
                className='rounded-full hover:bg-primary hover:text-white transition-colors'
                asChild
              >
                <a
                  href='https://github.com/robinsonjabari'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='h-5 w-5' />
                </a>
              </Button>
              <Button
                variant='outline'
                size='icon'
                className='rounded-full hover:bg-primary hover:text-white transition-colors'
                asChild
              >
                <a
                  href='https://www.linkedin.com/in/robinson-jabari/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='h-5 w-5' />
                </a>
              </Button>
              <Button
                variant='outline'
                size='icon'
                className='rounded-full hover:bg-primary hover:text-white transition-colors'
                asChild
              >
                <a href='mailto:jbrobinson15@icloud.com'>
                  <Mail className='h-5 w-5' />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id='about' className='py-20 bg-muted/30'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-2 text-center'>About Me</h2>
            <div className='w-16 h-1 bg-primary mx-auto mb-12'></div>

            <div className='max-w-3xl mx-auto text-base text-center leading-[1.2] space-y-4'>
              <p>
                Hello! I&apos;m Jabari, a computer science student with a
                passion for software development. My journey in tech began with
                the curiosity behind users interaction with technology and how
                code comes together to create interactive software. This evolved
                into a deep interest in creating innovative digital experiences.
              </p>
              <p>
                My skill set encompasses front-end development using React,
                Next.js, and Tailwind CSS, along with some working knowledge of
                back-end development and database management, contributing to my
                understanding of the full-stack environment.
              </p>
              <p>
                Outside of coding, I enjoy a diverse range of interests
                including forex trading and analysis, roller skating, and music
                production. I&apos;m a firm believer in lifelong learning,
                always seeking new technologies and insights from every
                experience and interaction to expand my skillset.
              </p>
            </div>

            {/* Skills Section */}
            <div className='mt-16'>
              <h3 className='text-2xl font-bold mb-8 text-center'>
                Skills & Technologies
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto'>
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "Git",
                  "HTML/CSS",
                ].map((skill) => (
                  <div
                    key={skill}
                    className='bg-background p-3 rounded-md text-center shadow-sm hover:shadow-md transition-shadow'
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='py-20'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-2 text-center'>My Projects</h2>
            <div className='w-16 h-1 bg-primary mx-auto mb-12'></div>
            <Projects />
          </div>
        </section>

        {/* Contact Section */}
        <section id='contact' className='py-20 bg-muted/30'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-2 text-center'>Contact Me</h2>
            <div className='w-16 h-1 bg-primary mx-auto mb-12'></div>

            <div className='max-w-md mx-auto text-center'>
              <p className='mb-6'>
                I&apos;m currently open to new opportunities and collaborations.
                Feel free to reach out!
              </p>

              <div className='flex justify-center gap-5 mb-8'>
                <Button variant='default' size='lg' asChild>
                  <a href='mailto:jbrobinson15@icloud.com'>
                    <Mail className='mr-2 h-4 w-4' /> Email Me
                  </a>
                </Button>
              </div>

              <div className='flex justify-center gap-4'>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full hover:bg-primary hover:text-white transition-colors'
                  asChild
                >
                  <a
                    href='https://github.com/robinsonjabari'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='h-5 w-5' />
                  </a>
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full hover:bg-primary hover:text-white transition-colors'
                  asChild
                >
                  <a
                    href='https://www.linkedin.com/in/robinson-jabari/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin className='h-5 w-5' />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='py-6 border-t'>
        <div className='container mx-auto px-4 text-center'>
          <p>
            © {new Date().getFullYear()} Jabari Robinson. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
