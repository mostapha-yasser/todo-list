import logo from "../../public/Checklist.svg"
function AboutUs() {
    return (
         <section className=" flex flex-col md:flex-row 
         items-center justify-center px-6 py-12">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={logo}
          alt="Todo Illustration"
          className="w-96 h-96 object-contain"
        />
      </div>

      <div className="md:w-1/2 md:pl-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-green-600 mb-4">About This Project</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to our simple yet powerful <span className="font-semibold">To-Do List App</span> 🎯.
          This project was built to practice <span className="text-green-600">Zustand</span> with React,
          styled using <span className="text-green-600">Tailwind CSS</span>, and deployed on
          <span className="text-green-600"> Vercel</span>.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>📝 Add, edit, and remove tasks</li>
          <li>⚡ Lightweight Zustand state management</li>
          <li>🎨 Responsive Tailwind UI</li>
          <li>🌐 Fast Vercel deployment</li>
        </ul>
        <p className="text-gray-600">
          This project is mainly for learning modern frontend tools. Future plans may include
          dark mode, authentication, and cloud sync 🚀.
        </p>
      </div>
    </section>

    );
}

export default AboutUs;