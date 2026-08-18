import { Book, GraduationCap } from "lucide-react";

// -----------------------------------------------------------------------------
// EducationSection
// -----------------------------------------------------------------------------
export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      {/* ======================
          Container & Section Title
      ====================== */}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">Education</span>
        </h2>
        <div className="grid grid-cols-1 gap-6">

   
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  B.Tech Computer Science
                </h4>
                <p className="text-muted-foreground">
                  Rajiv Gandhi Proudyogiki Vishwavidyalaya · CGPA: 8/10
                </p>
              </div>
            </div>
          </div>

        </div>
        {/* End Grid */}
      </div>
      {/* End Container */}
    </section>
  );
};
