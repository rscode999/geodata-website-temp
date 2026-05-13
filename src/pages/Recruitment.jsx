import { useState, useEffect } from 'react'
import './Base.css';
import './Recruitment.css';
import SlidingContainer from "../components/SlidingContainer.jsx";
import RevealContainer from "../components/RevealContainer.jsx";

function FAQItem({ question, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-question"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`faq-icon ${open ? 'open' : ''}`} aria-hidden="true">
          {open ? '▾' : '▸'}
        </span>
      </button>

      {open && (
        <div className="faq-answer">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Recruitment() {
  useEffect(() => {
    document.title = `Recruitment`;
  }, []);

  const faqs = [
    {
      q: "Who can apply?",
      a: "Anyone interested in data, weather, GIS, software, or research! We welcome all majors and experience levels."
    },
    {
      q: "Do I need prior experience?",
      a: "No. We value curiosity and willingness to learn. We’ll help you ramp up."
    },
    {
      q: "What’s the time commitment?",
      a: "Typically a few hours per week depending on your subteam and goals."
    },
    {
      q: "What are coffee chats?",
      a: "Short informal conversations with team members to learn about the team and ask questions."
    },
  ];

  return (
    <>
      <div className='page'>
        <div className='team-photo'>
          <SlidingContainer>
            <div className='info-box'>
              <h1 className='titleHeader'>Recruitment</h1>
              <p>
                Thank you for your interest in CU Geodata! We recently began our recruitment process for the Fall 2026 semester! Below you can find a link to our team application, which includes a set of short questions to learn more about you. We also hold{" "}
                <a
                  href="https://docs.google.com/spreadsheets/d/1tklDgxedBnjQK8MM15cmxKWhptDZjEs686E5T4I5IoE/edit?gid=1607338661#gid=1607338661"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  coffee chats
                </a>{" "}
                if you want to learn more about us! Please note that the{" "}
                <b className='gpta'> General Project Team Application </b>
                must be completed in addition to the CU GeoData Application.
              </p>
              <p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf-hJH-No53xT1Wx4IZA_eUKRsOpr_6ME9ks5nx4YTBbquT0A/closedform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CU GeoData Application Form
                </a>
              </p>
              <p>
                <a
                  href="https://cornell.ca1.qualtrics.com/jfe/form/SV_cuXl2vYgb5sNPWS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  General Project Team Application
                </a>
              </p>
            </div>
          </SlidingContainer>
        </div>

        <div className='info-box'>
          <h1 className='titleHeader'>FAQ's</h1>
          <p style={{fontWeight: "bold"}}>Here are some commonly asked questions about GeoData:</p><br/>

          <div className="faq-list">
            <RevealContainer delay={100}>
              {faqs.map((item, idx) => (
                <FAQItem key={idx} question={item.q}>
                  <p>{item.a}</p>
                </FAQItem>
              ))}
            </RevealContainer>
          </div>
        </div>
      </div>
    </>
  );
}