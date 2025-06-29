import React from 'react'
import Footer from './common/Footer'

function About() {
  return (
    <div>
       <div className='flex items-center justify-center'>
                      <div className="w-full sm:w-1/2 flex-col justify-center">
                          <h2 className='text-3xl md:text-6xl font-bold pb-2'>Our mission is to democratize publishing and eCommerce one website at a time.</h2>
                          <p className='max-w-lg py-2'>We’re a hosted version of the open source software. Because when you have the freedom to create, express yourself, and earn money online, the impossible becomes business as usual.</p>
                          <h2 className='text-4xl md:text-7xl font-bold text-orange-400 py-2'>What We Believe Anyone can have an idea. We want you to have the power and support to get it online.</h2>
                      </div>
         </div>
         <div className='bg-orange-300'>
         <div className="max-w-md-6xl p-4 my-4 rounded-md  mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div>
      <h3 className="text-2xl font-semibold mb-2">Everyone has a voice.</h3>
      <p className='max-w-md'>Ideas don’t belong behind high walls. Software and your posts shouldn’t either. We’re here to help you express yourself.</p>
    </div>

    
    <div>
      <h3 className="text-2xl font-semibold mb-2">Real support from real people.</h3>
      <p className='max-w-md'>Customer service isn’t something we offer. It’s who we are. We call it Happiness—real support delivered by real human beings.</p>
    </div>

    
    <div>
      
      <h3 className="text-2xl font-semibold mb-2">Freedom and ownership.</h3>
      <p className='max-w-md'>Whether it’s a blog, store, portfolio, or something entirely different, you have the freedom to create a site that fits you, and own all of your content and data too.</p>
    </div>

    
    <div>
      
      <h3 className="text-2xl font-semibold mb-2">You can make something that matters.</h3>
      <p className='max-w-md'>With simple tools for designing and building your site, securely hosting it, and finding your audience, you can have a website that grows with you.</p>
    </div>

</div></div>


          <Footer/>
      
                  </div>
    
  )
}

export default About