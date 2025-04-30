export default function App() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-center space-y-6">
      <img
        src="/madhavan.jpg"
        alt="Madhavan Mallapu"
        className="mx-auto w-36 h-36 rounded-full border-4 border-blue-600 shadow-md object-cover"
      />
      <h1 className="text-3xl font-bold">Madhavan Mallapu</h1>
      <p className="text-lg text-gray-600">After Sales Operations Manager</p>
      <p>Nellore, Andhra Pradesh – 524001</p>
      <p>📞 +91-93923-62439 | ✉ conquerormadhavan@gmail.com</p>

      <a
        href="/Madhavan_Resume_With_Portfolio_and_QR.docx"
        download
        className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
      >
        📄 Download Resume
      </a>

      <div className="text-left mt-8 space-y-4">
        <h2 className="text-xl font-semibold border-b pb-1">Profile Summary</h2>
        <p>17+ years of experience across leading automobile brands. Skilled in service operations, dealer support, warranty handling, and team training. Proven track record in improving service KPIs and customer satisfaction.</p>

        <h2 className="text-xl font-semibold border-b pb-1">Core Competencies</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>After-Sales Operations & Dealer Management</li>
          <li>Technical Training & Team Development</li>
          <li>Warranty & Spare Parts Control</li>
          <li>Customer Satisfaction & Support</li>
        </ul>

        <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
        <p>D.A.E – Diploma in Automobile Engineering</p>
        <p>B.Com – Sri Venkateswara University</p>
      </div>

      <div className="mt-10 text-left">
        <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
        <form
          action="https://formspree.io/f/xyyrrkqg"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded h-28"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <footer className="pt-8 text-sm text-gray-500">
        © 2025 Madhavan Mallapu | Portfolio
      </footer>
    </div>
  );
}