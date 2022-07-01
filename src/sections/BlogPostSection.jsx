export const BlogPostSection = () => (
  <section className="py-5">
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto text-center">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <a href="#">Home</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: "12px", height: "12px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <a href="#">Blog</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: "12px", height: "12px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <a href="#">Article</a>
          </div>
          <h2 className="display-4 fw-bold mb-4">
            Lorem ipsum dolor sit amet consectutar domor at elis
          </h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="me-4">
              <img
                className="img-fluid"
                src="bootstrap5-plain-assets/images/blue-400-avatar.png"
                alt=""
                style={{ width: "56px", height: "56px" }}
              />
            </div>
            <div className="text-start">
              <h4>Danny Bailey</h4>
              <p className="text-muted mb-0">February 26, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-5">
      <img
        className="img-fluid"
        src="bootstrap5-plain-assets/images/blue-400-horizontal.png"
        alt=""
      />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 mx-auto">
          <p className="lead text-muted mb-4">
            These types of questions led me to miss numerous deadlines, and I
            wasted time and energy in back-and-forth communication. Sadly, this
            situation could have been avoided if the wireframes had provided
            enough detail.
          </p>
          <p className="lead text-muted mb-4">
            These types of questions led me to miss numerous deadlines, and I
            wasted time and energy in back-and-forth communication. Sadly, this
            situation could have been avoided if the wireframes had provided
            enough detail.
          </p>
          <p className="lead text-muted mb-4">
            Now that I am a UX designer, I notice that some designers tend to
            forget that wireframes are equally creative and technical. We are
            responsible for designing great ideas, but we are also responsible
            for creating product specifications. I admit that there can be so
            many details to remember that it’s easy to lose track. To save time
            and energy for myself, I gathered all of my years of wireframing
            knowledge into a single checklist that I refer to throughout the
            process. And now I am sharing this knowledge with you, so that you
            can get back to being creative.
          </p>
        </div>
      </div>
    </div>
  </section>
);
