export default function Education() {
  const education = [
    {
      institution: "Northeastern University",
      degree: "MASTER OF SCIENCE",
      field: "Computer Science",
      location: "Boston, USA",
      period: "May 2027 (Expected)",
      gpa: "3.9/4.0"
    },
    {
      institution: "Udacity",
      degree: "NANODEGREE",
      field: "AI Programming with Python",
      location: "Online",
      period: "Completed",
      gpa: ""
    },
    {
      institution: "Pandit Deendayal Energy University",
      degree: "BACHELOR OF TECHNOLOGY",
      field: "Computer Engineering",
      location: "India",
      period: "May 2024",
      gpa: "3.77/4.0"
    }
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-white">SOME </span>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            LEARNINGS
          </span>
          <span className="text-white"> ALONG THE WAY...</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {edu.institution}
              </h3>
              <div className="h-px bg-purple-600 mb-4"></div>
              <p className="text-lg font-semibold text-gray-700 mb-2 uppercase">
                {edu.degree}
              </p>
              <p className="text-sm text-gray-600">
                {edu.field}
              </p>
              {edu.gpa && (
                <p className="text-sm text-gray-600 mt-2">
                  GPA: {edu.gpa}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

