/**
 * College Corridor — WebMCP Integration Module
 * Exposes browser capabilities for AI agents and WebMCP assistants.
 */
(function() {
  const tools = [
    {
      name: "search_colleges",
      description: "Search and filter top medical, engineering, management, and law colleges in India by course, location, and budget.",
      parameters: {
        type: "object",
        properties: {
          course: { type: "string", description: "Course category (e.g. mbbs, btech, mba, law)" },
          location: { type: "string", description: "State or city preference" },
          max_budget_lakhs: { type: "number", description: "Maximum 5-year budget in Lakhs INR" }
        },
        required: ["course"]
      },
      execute: async function(args) {
        window.location.href = `find-colleges.html?course=${encodeURIComponent(args.course || '')}`;
        return { status: "success", message: `Navigating to college finder for ${args.course}` };
      }
    },
    {
      name: "find_courses",
      description: "Discover available higher education streams and entrance exam counselling programs.",
      parameters: {
        type: "object",
        properties: {
          stream: { type: "string", description: "Stream category (medical, engineering, management, law)" }
        }
      },
      execute: async function(args) {
        const stream = (args.stream || '').toLowerCase();
        if (stream.includes('med')) window.location.href = 'medical-admissions.html';
        else if (stream.includes('eng')) window.location.href = 'engineering-admissions.html';
        else if (stream.includes('man') || stream.includes('mba')) window.location.href = 'management-admissions.html';
        else if (stream.includes('law')) window.location.href = 'law-admissions.html';
        else window.location.href = 'counselling.html';
        return { status: "success", message: `Navigating to ${stream} admissions page` };
      }
    },
    {
      name: "start_counselling_enquiry",
      description: "Open the lead capture advisory form to book a 1-on-1 profile counselling session.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string" },
          phone: { type: "string" },
          email: { type: "string" },
          program: { type: "string" }
        }
      },
      execute: async function(args) {
        const modal = document.getElementById('lead-modal');
        if (modal) {
          modal.classList.add('active');
          if (args.name) { const el = document.getElementById('full-name'); if (el) el.value = args.name; }
          if (args.phone) { const el = document.getElementById('phone'); if (el) el.value = args.phone; }
          if (args.email) { const el = document.getElementById('email'); if (el) el.value = args.email; }
          if (args.program) { const el = document.getElementById('program-interest'); if (el) el.value = args.program; }
        }
        return { status: "success", message: "Opened counselling advisory modal form" };
      }
    },
    {
      name: "contact_college_corridor",
      description: "Get direct phone numbers, email, and WhatsApp advisory contact information.",
      parameters: { type: "object", properties: {} },
      execute: async function() {
        return {
          phone: "+91 8194 083 803",
          email: "admissions@collegecorridor.com",
          whatsapp: "https://wa.me/918194083803",
          address: "Greater Noida, Uttar Pradesh, India"
        };
      }
    }
  ];

  if (typeof window !== 'undefined') {
    window.collegeCorridorMCP = { tools: tools };
    if (window.navigator && window.navigator.modelContextProtocol && typeof window.navigator.modelContextProtocol.registerTool === 'function') {
      tools.forEach(tool => {
        try {
          window.navigator.modelContextProtocol.registerTool(tool);
        } catch (e) {
          console.warn("WebMCP tool registration warning:", e);
        }
      });
    }
  }
})();
