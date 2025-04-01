/** @format */
import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl  font-bold mb-8 bg-gradient-to-r form-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30">
            <h3 className="text-xl font-bold mb-2"> Eccommerce Website</h3>
            <p className="text-gray-400 mb-4">
              User-Friendly Navigation: Clear menus, breadcrumbs, and search
              bars to help users find products easily
            </p>
            <div>
              {["React", "Tailwind", "Html"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://ecommerce-website-mu-mauve.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Projects ➡️
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30">
            <h3 className="text-xl font-bold mb-2"> Weather App</h3>
            <p className="text-gray-400 mb-4">
              A weather app serves as a helpful tool to keep you informed about
              current and upcoming weather conditions.It helps you plan your day
              or week by offering hourly, daily, or even long-term weather
              predictions.
            </p>
            <div>
              {["React", "Tailwind", "Html"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://ecommerce-website-mu-mauve.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Projects ➡️
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30">
            <h3 className="text-xl font-bold mb-2"> Todo App</h3>
            <p className="text-gray-400 mb-4">
              The main purpose of a To-Do App is to help users organize tasks,
              manage time efficiently, and boost productivity. It serves as a
              simple tool to keep track of daily tasks, set priorities, and
              ensure nothing important is forgotten.
            </p>
            <div>
              {["React", "Tailwind", "Html"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://todo-app-umber-seven-57.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Projects ➡️
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30">
            <h3 className="text-xl font-bold mb-2"> Expense Tracker</h3>
            <p className="text-gray-400 mb-4">
              The main goal of an Expense Tracker is to help users gain
              financial control by tracking income and expenses, ensuring they
              can budget effectively, reduce unnecessary spending, and save
              money.
            </p>
            <div>
              {["React", "Tailwind", "Html"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="https://expense-tracker-taupe-xi.vercel.app/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Projects ➡️
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
