import React from 'react';

const blogs = [
  {
    image: 'https://static.vecteezy.com/system/resources/previews/012/168/187/large_2x/beautiful-sunset-on-the-beach-with-palm-tree-for-travel-and-vacation-free-photo.JPG',
    title: 'How AI Revolutionizes CCTV Footage Analysis',
    description: 'Discover how artificial intelligence enhances security by automating CCTV footage analysis.',
    author: 'John Doe',
    date: 'Jan 20, 2025',
    likes: 57,
    comments: 6,
    views: 138,
  },
  {
    image: 'https://tse3.mm.bing.net/th?id=OIP.mAUM3wvDeDHSfnGMdgngwgHaE8&pid=Api&P=0&h=180',
    title: 'Top Data Security Trends for 2025',
    description: 'Stay ahead with the latest trends in data security and smart monitoring for a safer future.',
    author: 'Jane Smith',
    date: 'Feb 10, 2025',
    likes: 43,
    comments: 4,
    views: 120,
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.mdPveHCt6Fw2EGoTiG9jtQHaEt&pid=Api&P=0&h=180',
    title: 'Smart Monitoring: Future of Surveillance',
    description: 'Learn about the innovative technologies shaping the future of smart surveillance.',
    author: 'Alex Johnson',
    date: 'Mar 5, 2025',
    likes: 65,
    comments: 8,
    views: 150,
  },
];

const Blogs = () => {
  return (
    <div className="bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 min-h-screen p-6">
      <div className="text-center mb-8">
        <h2 className="font-extrabold text-3xl p-3 text-purple-800">
          Welcome to SecureLens, where Technology Meets Innovation!
        </h2>
        <p className="italic text-gray-700">
          From expert tips on analyzing CCTV footage with AI to the latest trends in data security and smart monitoring,
          our blogs are designed to keep you informed, inspired, and ahead of the curve.
        </p>
        <h3 className="font-bold p-4 flex justify-center items-center gap-2 text-xl text-purple-900">
          Stay tuned, stay secure, and explore the future with us!
          <lord-icon
            src="https://cdn.lordicon.com/mwhabkof.json"
            trigger="hover"
            style={{ width: '50px', height: '50px', marginLeft: '5px' }}
          ></lord-icon>
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-2xl text-purple-800 mb-2 hover:text-purple-600 transition duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{blog.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <div className="flex justify-between mt-3 text-purple-700">
                <span>👍 {blog.likes}</span>
                <span>💬 {blog.comments}</span>
                <span>👁️ {blog.views}</span>
              </div>
              <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
