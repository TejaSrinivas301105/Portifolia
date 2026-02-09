import Tilt from "react-parallax-tilt";
import ReactTypingEffect from "react-typing-effect";
import profileImage from "../../assets/Formal_Photo.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-8 px-[7vw] md:px-[7vw] lg:px-[18vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
          Teja Srinivas Vadlamannati
        </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <ReactTypingEffect
                text={["Full Stack Developer", "Coder"]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mt-8 leading-relaxed max-w-xl">
            I am a passionate full-stack developer and B.Tech student with hands-on
            experience in building real-world applications using the MERN stack.
            I have worked on impactful projects such as
            <span className="text-white font-medium"> Ticket Support System</span>,
            <span className="text-white font-medium"> CrowdSense</span>, and
            <span className="text-white font-medium"> Farm Connect</span>.
            Alongside web development, I continuously improve my problem-solving
            skills through regular practice on LeetCode and by exploring new tools
            and technologies.
          </p>

          <a
            href="https://drive.google.com/file/d/1UxBnOKXdDL9U2Klt356BAt15B3leimrM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-10 py-3 text-lg font-bold rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(130,69,236,0.8)]"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="rounded-full"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 blur-2xl opacity-40"></div>
              <img
                src={profileImage}
                alt="Teja Srinivas"
                className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] rounded-full object-cover border-4 border-purple-600 shadow-xl"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
