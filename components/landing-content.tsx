export const LandingContent = () => {
  const testimonials = [
    {
      name: "Joel",
      avatar: "J",
      title: "Software Engineer",
      description: "This is the best application I've ever used!",
    },
    {
      name: "Antonio",
      avatar: "A",
      title: "Designer",
      description: "I use this daily for generating new photos!",
    },
    {
      name: "Mark",
      avatar: "M",
      title: "CEO",
      description: "This app has changed my life, cannot imagine working without it!",
    },
    {
      name: "Mary",
      avatar: "M",
      title: "CFO",
      description: "The best in class, definitely worth the premium subscription!",
    },
  ];

  const additionalTestimonials = [
    {
      name: "Emily",
      avatar: "E",
      title: "Content Creator",
      description: "This tool is a game-changer for content creation. Highly recommended!",
    },
    {
      name: "John",
      avatar: "J",
      title: "Freelancer",
      description: "I rely on this AI tool for generating code snippets quickly. Huge time-saver!",
    },
    {
      name: "Sophia",
      avatar: "S",
      title: "Blogger",
      description: "I'm amazed by the quality of content this AI generates. It's a game-changer for my blog!",
    },
    {
      name: "Alex",
      avatar: "A",
      title: "Photographer",
      description: "As a photographer, I use this AI tool to enhance and create stunning visual content. It's impressive!",
    },
  ];

  const allTestimonials = [...testimonials, ...additionalTestimonials];

  return (
    <div className="px-10 py-20 bg-gradient-to-b from-purple-800 to-indigo-700">
      {/* Testimonials section */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl text-white font-extrabold">Testimonials</h2>
        <p className="text-gray-300 text-sm mt-2">What our users are saying</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allTestimonials.map((item, index) => (
          <div
            key={item.description}
            className={`bg-[#1E3040] border-none text-white rounded-lg p-6 shadow-lg transform transition hover:scale-105 ${
              index % 2 === 0 ? 'bg-opacity-50' : 'bg-opacity-75'
            }`}
          >
            <div className="flex items-center justify-center gap-x-2">
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="text-sm text-gray-300">{item.title}</div>
            </div>
            <div className="mt-3 text-gray-400 text-sm text-center">{item.description}</div>
          </div>
        ))}
      </div>

      
      {/* Our Goal section */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl text-white font-extrabold">What is Our Goal?</h2>
        <p className="text-gray-300 text-sm mt-2">How we aim to revolutionize creativity</p>
      </div>

      {/* Space */}
      <div className="mt-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Innovative AI Technology</h3>
          <p className="text-gray-400">
            Our goal is to provide you with cutting-edge AI tools that enhance your creative processes. We're committed to pushing the boundaries of technology to help you achieve your creative vision.
          </p>
        </div>
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Streamlined Workflow</h3>
          <p className="text-gray-400">
            We want to streamline your creative workflow by automating repetitive tasks. With our AI-powered tools, you can focus on the most important aspects of your projects, saving you valuable time and effort.
          </p>
        </div>
      </div>

      {/* Key Features section */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl text-white font-extrabold">Key Features</h2>
        <p className="text-gray-300 text-sm mt-2">What sets us apart</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Video Generation Feature */}
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Video Generation</h3>
          <p className="text-gray-400">
            Create stunning videos with AI-powered video generation. Effortlessly transform your ideas into captivating visual content.
          </p>
        </div>

        {/* Image Generation Feature */}
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Image Generation</h3>
          <p className="text-gray-400">
            Generate high-quality images for your projects using advanced AI algorithms. Unlock endless creative possibilities.
          </p>
        </div>

        {/* Code Snippets Generator Feature */}
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Code Snippets Generator</h3>
          <p className="text-gray-400">
            Quickly generate code snippets for various programming languages. Boost your productivity and coding efficiency.
          </p>
        </div>

        {/* Music Generator Feature */}
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Music Generator</h3>
          <p className="text-gray-400">
            Harness the power of AI to compose unique and inspiring musical compositions. Elevate your projects with AI-generated music.
          </p>
        </div>
      </div>
      {/* How It Works Section */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl text-white font-extrabold">How It Works</h2>
        <p className="text-gray-300 text-sm mt-2">Step-by-step process</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Step 1 */}
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Step 1: Choose a Tool</h3>
          <p className="text-gray-400">
            Select the AI tool you want to use, whether it's for generating images, videos, code snippets, or more.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Step 2: Customize</h3>
          <p className="text-gray-400">
            Customize the parameters and settings according to your preferences and project requirements.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Step 3: Generate</h3>
          <p className="text-gray-400">
            Click the "Generate" button and let the AI tool create content that meets your needs.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Step 4: Review & Download</h3>
          <p className="text-gray-400">
            Review the generated content and make any necessary adjustments. Once satisfied, download and use it in your projects.
          </p>
        </div>
      </div>

          <div className="mt-20 text-center">
        <h2 className="text-4xl text-white font-extrabold">Frequently Asked Questions</h2>
        <p className="text-gray-300 text-sm mt-2">Answers to common inquiries</p>
      </div>
      <div className="mt-8">
        {/* FAQ list */}
        <div className="bg-[#1E3040] border-none text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">How do I get started?</h3>
          <p className="text-gray-400">
            Simply sign up for an account, choose the AI tool you need, customize the settings, and start generating content!
          </p>
        </div>

        {/* Additional FAQs */}
        <div className="bg-[#1E3040] border-none text-white p-6 mt-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Can I upgrade or downgrade my plan later?</h3>
          <p className="text-gray-400">
            Yes, you can easily upgrade or downgrade your plan at any time from your account settings.
          </p>
        </div>

        <div className="bg-[#1E3040] border-none text-white p-6 mt-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">What types of payment do you accept?</h3>
          <p className="text-gray-400">
            We accept major credit and debit cards, as well as PayPal, for payment.
          </p>
        </div>

        <div className="bg-[#1E3040] border-none text-white p-6 mt-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">Is my data and information secure?</h3>
          <p className="text-gray-400">
            Absolutely. We prioritize the security of your data and use industry-standard encryption and security measures to keep it safe.
          </p>
        </div>

        <div className="bg-[#1E3040] border-none text-white p-6 mt-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3 text-[#F6AD55]">What happens if I exceed my usage limits?</h3>
          <p className="text-gray-400">
            If you exceed your usage limits, you will be notified and given the option to upgrade your plan or adjust your usage.
          </p>
        </div>

        {/* Add more FAQs as needed */}
      </div>

        
      <div className="text-white text-center py-6">
  <hr className="border-gray-400 mb-4" />
  <p className="text-gray-400">
    Made with <span className="text-red-500">❤️</span> by Mridul
  </p>
</div>

      </div>
      
     
  );
};
