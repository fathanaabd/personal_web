import React from 'react';

const About = () => {
  return (
    <div className="py-12 px-6 sm:px-12 md:px-20 text-sm">
      <div className="max-w-3xl mx-auto">

        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-1">Fathan Akbar Abdurachman</h1>
          <p className="text-base mb-1">Software Engineer</p>
          <p className="text-sm">
            Bandung, Indonesia; <a href="mailto:fathan.aa.01@gmail.com" className="text-blue-600 hover:underline">fathan.aa.01@gmail.com</a>; +62 896 9899 4508; <a href="https://fathanaabd.web.app" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">fathanaabd.web.app</a>
          </p>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2">Professional Summary</h2>
          <p className="text-sm text-justify">
            With over 3+ years working experience in software products, I successfully delivered various innovations of product development aligned with functional requirements. Proven by streamlining development workflows and significantly improving overall operations.
          </p>
        </section>

        {/* Work Experiences */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Work Experiences</h2>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-normal">PT. Malomo Teknologi Indonesia</h3>
              <span className="text-sm">Jun 2022 - Aug 2023</span>
            </div>
            <p className="text-sm mb-2">Software Engineering</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-justify">
              <li>Developed a web application to monitor environment conditions around avocado yard, acquiring real-time data to visualize it via browser.</li>
              <li>Developed firmware on miniaturized CNC machines to test durability of lipstick after being used several times, allowing to measure the quality by calculating swipe cycle of the lipstick.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-normal">PT. Modular Global Teknindo</h3>
              <span className="text-sm">Nov 2023 - Feb 2026</span>
            </div>
            <p className="text-sm mb-2">Electrical Engineering</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-justify">
              <li>Managed a bill of material of electronic requirement for accessories equipment in modular operating theatre, ensuring the costs are within the specified budget.</li>
              <li>Collaborated with R&D department to develop a firmware automation program for the prototype of refrigerant control system to maintain below zero temperature inside the mortuary chamber.</li>
              <li>Designed firmware for pass boxes to implement an interlocking system in modular operating theatres.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-sm font-normal">PT. Sunrise Purification Technology</h3>
              <span className="text-sm">Mar 2026 - Jul 2026</span>
            </div>
            <p className="text-sm mb-2">IT Programmer</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-justify">
              <li>Developed a web application that empowers sales teams to generate accurate cost estimations for cleanroom and surgical room projects, reducing manual calculation time significantly.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2">Education</h2>
          <div className="mb-4">
            <h3 className="text-sm font-normal">STMIK AMIKBANDUNG</h3>
            <div className="flex justify-between items-baseline">
              <p className="text-sm">Bachelor of Informatic Engineering</p>
              <span className="text-sm">3.48 GPA</span>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2">Technical Skills:</h2>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
            <li><span className="font-bold">Languages:</span> C/C++, Python</li>
            <li><span className="font-bold">Hardware Microcontroller:</span> ESP32, STM32, Arduino (Atmel)</li>
            <li><span className="font-bold">Cloud Services:</span> Firebase, Google Cloud</li>
            <li><span className="font-bold">Engineering Expertise:</span> Embedded Systems, Firmware Development, Web Application Development with Flask</li>
            <li><span className="font-bold">Version Control:</span> Git, GitHub Actions</li>
            <li><span className="font-bold">Coding Practices:</span> Focus on clean and maintainable code, AI-Assisted Software Development</li>
          </ul>
        </section>

        {/* Soft Skills & Competencies */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2">Soft Skills & Competencies:</h2>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
            <li><span className="font-bold">Languages:</span> English (Advanced Proficiency)</li>
            <li><span className="font-bold">Cognitive Skills:</span> Computational Thinking, Critical Problem-Solving</li>
            <li><span className="font-bold">Professional Skills:</span> Effective Workplace Communication, Task Management</li>
          </ul>
        </section>



      </div>
    </div>
  );
};

export default About;
