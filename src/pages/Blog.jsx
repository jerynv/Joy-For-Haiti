import './Blog.css'

const blogPosts = [
  {
    id: 1,
    date: 'March 15, 2024',
    title: 'Groundbreaking Ceremony: A New Beginning',
    image: '/images/community-group.jpg',
    imageAlt: 'Joy for Haiti community gathering',
    content: [
      'Today marks a significant milestone in our journey. After months of planning and prayer, we held our groundbreaking ceremony on the land that will become the future home of Joy for Haiti. The community came together, and the sense of hope was palpable.',
      'We were joined by local leaders, supporters from around the world, and most importantly, the young people who will one day call this place home. As we broke ground, we were reminded that every great work begins with a single step of faith.',
      'The vision is becoming reality, one prayer at a time. We are grateful for each person who has believed in this mission and contributed to making this day possible.'
    ]
  },
  {
    id: 2,
    date: 'February 8, 2024',
    title: 'Meeting Our First Residents',
    image: '/images/boy-smiling.jpg',
    imageAlt: 'Young Haitian boy smiling',
    content: [
      'This week, we had the privilege of meeting several teenagers who are currently living in difficult circumstances. Their stories are heartbreaking, but their resilience is inspiring. These young people have dreams—dreams of finishing school, dreams of becoming doctors, teachers, and leaders.',
      'One young woman shared with us her hope to become a nurse so she can help others in her community. Another young man dreams of studying engineering. These are not impossible dreams. They are God-given aspirations that deserve to be nurtured.',
      'As we listened to their stories, we were reminded why Joy for Haiti exists. These are not statistics. These are children of God, each with unique gifts and potential. We are committed to providing them with a safe place to grow, learn, and thrive.'
    ]
  },
  {
    id: 3,
    date: 'January 22, 2024',
    title: 'The Power of Community Support',
    image: '/images/backpack-distribution.jpg',
    imageAlt: 'Children receiving backpacks',
    content: [
      'We continue to be overwhelmed by the generosity of our supporters. This month, we received donations from families, churches, and individuals who believe in our mission. Every contribution, no matter the size, brings us closer to our goal.',
      'A group of students from a local high school organized a fundraiser and raised enough to sponsor one student\'s education for an entire year. A church in Indiana committed to monthly support. A family decided to forego birthday gifts and asked for donations to Joy for Haiti instead.',
      'These acts of kindness remind us that we are not alone in this work. We are part of a larger community of people who care deeply about the future of Haiti\'s youth. Together, we are building something beautiful.'
    ]
  },
  {
    id: 4,
    date: 'December 10, 2023',
    title: 'Planning for the Future',
    image: '/images/kodi-in-haiti.jpg',
    imageAlt: 'Kodi visiting Haiti',
    content: [
      'As we approach the end of the year, we find ourselves in a season of planning and preparation. The architectural plans for the first three dorms are complete. We\'ve met with local contractors and are beginning to understand the logistics of construction in Haiti.',
      'There are challenges, of course. Building in Haiti requires patience, flexibility, and trust in God\'s timing. But we are moving forward with confidence, knowing that this work is not ours alone—it is God\'s work, and He will provide.',
      'We are also developing our program structure. How will we support these young people academically? How will we ensure their spiritual growth? How will we prepare them for life beyond our walls? These questions guide our planning every day.'
    ]
  },
  {
    id: 5,
    date: 'November 3, 2023',
    title: 'Why We Do This Work',
    image: '/images/siblings-with-food.jpg',
    imageAlt: 'Two siblings holding hands with a meal',
    content: [
      'Sometimes people ask us why we chose to focus on teenagers. The answer is simple: because they are often forgotten. When orphanages close or when children age out, these young people are left with nowhere to go and no one to turn to.',
      'They are still children. They still need guidance, support, and love. They still need to finish their education. But without a safe place to live and people who believe in them, their futures are uncertain.',
      'Joy for Haiti exists to fill that gap. We believe that every young person deserves a chance to fulfill their God-given potential. We believe that with the right support, these teenagers can break cycles of poverty and become leaders in their communities.',
      'This is not just about providing housing. It\'s about providing hope. It\'s about showing these young people that they matter, that their dreams matter, and that they are loved.'
    ]
  },
  {
    id: 6,
    date: 'October 18, 2023',
    title: 'Gratitude and Reflection',
    image: '/images/children-gathering.jpg',
    imageAlt: 'Children gathered together',
    content: [
      'As we reflect on the past year, we are filled with gratitude. What started as a whisper from God has grown into something we never could have imagined. We\'ve seen doors open, relationships form, and resources provided in ways that can only be described as miraculous.',
      'We are grateful for our Haitian partners who work tirelessly on the ground. We are grateful for our board members who give their time and wisdom. We are grateful for every donor who has invested in this vision.',
      'Most of all, we are grateful for the opportunity to serve. This work is not always easy, but it is always meaningful. We wake up each day knowing that we are part of something bigger than ourselves—something that will impact generations to come.',
      'Thank you for being part of this journey. Your prayers, your support, and your belief in this mission sustain us. Together, we are bringing joy to Haiti, one life at a time.'
    ]
  }
]

function Blog() {
  return (
    <div className="blog">
      {/* Page Hero */}
      <section className="page-hero blog-hero">
        <div className="page-hero-background">
          <img
            src="/images/supply-distribution.jpg"
            alt="Supply distribution in Haiti"
            className="page-hero-image"
          />
        </div>
        <div className="container">
          <h1>Updates & Stories</h1>
          <p className="page-hero-subtitle">Follow our journey as we work to bring joy to Haiti</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-container">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="blog-post"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="blog-date">{post.date}</div>
                <h2>{post.title}</h2>
                <div className="blog-image">
                  <img src={post.image} alt={post.imageAlt} />
                </div>
                {post.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
