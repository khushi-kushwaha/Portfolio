import InfosysLogo from "/work/Infosys-logo.webp";
import { User } from "lucide-react";

// -----------------------------------------------------------------------------
// WorkSection
// -----------------------------------------------------------------------------
export const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-4 relative">
      {/* ======================
          Container & Section Title
      ====================== */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           Work<span className="text-primary"> Experience</span>
        </h2>
        <div className="items-center">
        
        <div className="grid grid-cols-1 gap-6">
        {/* Card: Infosys Internship */}
            <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="flex items-start gap-4">
                <div className="shrink-0 aspect-square size-12 sm:size-14 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <img
                    src={InfosysLogo}
                    alt="Infosys Logo"
                    className="max-w-full max-h-full object-contain"
                />
                </div>

                <div className="text-left">
                    <h4 className="font-semibold text-lg">Infosys Springboard - Full Stack Developer Intern</h4>
                    {/* <p className="text-sm text-muted-foreground">Summer 2025</p> */}
                    
                    <ul className="text-muted-foreground list-disc pl-5 space-y-2 mt-3">
                    <li>
                        Built a <strong>Digital Site Survey Platform</strong> for Infrastructure Planning and Connectivity Optimization workflows.
                    </li>
                    <li>
                        Developed interactive features for <span className="text-primary font-semibold">Blueprint uploads</span>, <span className="text-primary font-semibold">RF scan</span>, <span className="text-primary font-semibold">site labeling</span>, <span className="text-primary font-semibold">checklists</span>, and <span className="text-primary font-semibold">survey progress tracking.</span>
                    </li>
                    <li>
                        Implemented <span className="text-primary font-semibold">Secure user authentication</span>, <span className="text-primary font-semibold">RESTful APIs</span>, and <span className="text-primary font-semibold">data management workflows</span> to support efficient collaboration between teams.
                    </li>
                    <li>
                        Developed <strong>full-stack web application</strong> with <span className="text-primary font-semibold">Springboard Java</span>, <span className="text-primary font-semibold">ReactJS</span>, and <span className="text-primary font-semibold">MYSQL</span> to enable teams to interact with the AI agents.
                    </li>
                    <li>
                        <strong>Reduced a 2-week manual process to just 10 minutes</strong>, 
                        significantly improving efficiency and decision speed.
                    </li>
                    </ul>
                </div>
                </div>
            </div>

          
          </div>
          {/* End Column */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Container */}
    </section>
  );
};
