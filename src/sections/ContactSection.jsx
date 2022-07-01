export const ContactSection = () => (
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto">
          <div className="mx-auto text-center mb-5">
            <span className="text-muted">Lorem ipsum</span>
            <h2 className="display-5 fw-bold mt-2 mb-3">
              Lorem ipsum dolor sit amet consectutar domor at elis
            </h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
              aliquet orci.
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <div className="p-5 bg-light rounded text-center">
                <h3>Address</h3>
                <p className="mt-3 mb-1">1686 Geraldine Lane</p>
                <p className="mb-0">New York, NY 10013</p>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <div className="p-5 bg-light rounded text-center">
                <h3>Contact</h3>
                <p className="mt-3 mb-1">hello@wireframes.org</p>
                <p className="mb-0">+7-843-672-431</p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="p-5 h-100 bg-light rounded text-center">
                <h3 className="mb-4">Socials</h3>
                <div className="d-flex flex-wrap justify-content-center align-items-end">
                  <img
                    className="mx-1"
                    src="bootstrap5-plain-assets/socials/facebook-light.svg"
                    alt=""
                  />
                  <img
                    className="mx-1"
                    src="bootstrap5-plain-assets/socials/twitter-light.svg"
                    alt=""
                  />
                  <img
                    className="mx-1"
                    src="bootstrap5-plain-assets/socials/instagram-light.svg"
                    alt=""
                  />
                  <img
                    className="mx-1"
                    src="bootstrap5-plain-assets/socials/github-light.svg"
                    alt=""
                  />
                  <img
                    className="mx-1"
                    src="bootstrap5-plain-assets/socials/linkedin-light.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
