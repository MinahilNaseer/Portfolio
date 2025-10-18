import React from 'react';

const ContactFormSection = ({ formData, setFormData, formStatus, handleSubmit }) => (
  <section className="bg-gray-900 px-8 py-20">
    <h2 className="text-4xl font-bold text-center mb-12">Send Message</h2>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-[#0a0a0a] rounded-lg overflow-hidden">
      <div className="w-full md:w-1/2 p-6 border-r border-gray-800 space-y-6">
        <span className="inline-block text-xs font-semibold text-red-500 bg-red-950 rounded-full px-3 py-1 border border-red-500 mb-2">
          ● Available for hire
        </span>
        <p className="text-sm text-gray-400 leading-relaxed">
          As a software engineer, I construct web interfaces and design systems with a special love for accessibility and performance. I tend to code things from scratch and enjoy bringing ideas to life.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed">
          I'm also an open-source developer, and in my spare time, I do digital art with my iPad Pro.
        </p>
        <img src="/images/signature.png" alt="signature" className="w-40 pt-4" />
      </div>

      <form className="w-full md:w-1/2 p-6 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            className="w-full mt-1 bg-transparent border-b border-gray-700 text-sm py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            className="w-full mt-1 bg-transparent border-b border-gray-700 text-sm py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200">How can I help you?</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            rows="4" 
            className="w-full mt-1 bg-transparent border-b border-gray-700 text-sm py-2 text-white focus:outline-none focus:border-indigo-500 transition-colors"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={formStatus === "Sending..."}
          className={`mt-4 font-semibold py-2 px-6 rounded transition ${formStatus === "Sending..." ? "bg-gray-400 text-black cursor-not-allowed" : "bg-white text-black hover:bg-gray-300"}`}
        >
          {formStatus === "Sending..." ? "Sending..." : "Send"}
        </button>
        {formStatus && <p className="text-sm text-center text-green-400">{formStatus}</p>}
      </form>
    </div>
  </section>
);

export default ContactFormSection;