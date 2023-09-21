import chill_guy from "../assets/icons/chill_guy.svg"
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: 'Can I work on a project I started before the hackathon?',
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    question: 'What happens if I need help during the hackathon?',
    answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 3,
    question: "What happens if I don't have an idea for a project?",
    answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from"
  },
  {
    id: 4,
    question: "Can I join a team or do I have to come with one?",
    answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point"
  },
  {
    id: 5,
    question: "What happens after the hackathon ends?",
    answer: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
  },
  {
    id: 6,
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yeah, sure you can."
  }
];

const QuestionList = () => {
  const [openAnswer, setOpenAnswer] = useState(null);

  const toggleAnswer = (id) => {
    setOpenAnswer((prevId) => (prevId === id ? null : id));
  };

  const closeAnswer = () => {
    setOpenAnswer(null);
  };


  useEffect(() => {
    // Add a click event listener to the document to close the answer when clicking outside
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.question-container')) {
        closeAnswer();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <ul className="my-24 flex flex-col gap-4">
      {questions.map((q) => (
        <li key={q.id} className="question-container border-b-2 border-custom-purple-three mx-2 lg:mx-0 font-montserrat">
          <div
            className="question flex justify-between focus:cursor-pointer hover:cursor-pointer"
            tabIndex={1}
            onClick={() => toggleAnswer(q.id)}
          >
            <p className={` ${openAnswer  === q.id ? "text-custom-purple-three": "text-white"}`}>{q.question}</p>
            <i className={`ri-${openAnswer === q.id ? "subtract": "add"}-line text-custom-purple-three`}></i>
          </div>
          <AnimatePresence>
            {openAnswer === q.id && (
              <motion.div
                className="answer mt-4 mb-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm w-[90%] mx-auto text-justify">{q.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
      <div className="overlay" onClick={closeAnswer}></div>
    </ul>
  );
};


const Faq = () => {
  return (
    <section className="mt-12 lg:mt-24" id="faqs">
      <div className="flex flex-col md:flex-row md:justify-center items-center max-w-[90rem] mx-auto ">
        <div className="md:basis-5/12">
          <h3 className="font-clash-bold text-lg md:text-2xl lg:text-4xl text-center lg:text-left">Frequently Asked <br/> <span className="text-custom-purple-three">Questions</span></h3>
          <p className="font-montserrat text-sm md:text-base text-center lg:text-left my-4 lg:my-8">We got answers to the questions that you might want to ask about <span className="font-bold">getlinked Hackathon 1.0</span></p>
          <QuestionList />
        </div>
        <div className="md:basis-5/12 lg:basis-7/12 relative">
          <span className="font-made-tommy-bold text-6xl text-custom-purple-three absolute left-32 md:left-36 lg:text-[6rem] lg:left-56">?</span>
          <span className="font-made-tommy-bold text-5xl text-custom-purple-three absolute left-60 top-8 lg:text-[4rem] lg:left-96 lg:top-12">?</span>
          <span className="font-made-tommy-bold text-5xl text-custom-purple-three absolute  left-8 top-8 md:left-12 lg:text-[4rem] lg:left-28 lg:top-16">?</span>
          <span className="font-made-tommy-bold text-5xl text-transparent" style={{visibility: "none"}}>?</span>
          <motion.img
            src={chill_guy}
            alt="A chill guy pondering"
            initial={{ y: 0 }} // Initial position (start at 0px)
            animate={{
              y: [10, -10, 10],
            }}
            transition={{
              repeat: Infinity, // Keep bobbing indefinitely
              repeatType: "loop",
              duration: 2,
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Faq