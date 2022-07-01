export const NewsletterSection = () => (
  <section className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-8 mb-4 mb-lg-0">
          <div className="d-flex align-items-center">
            <span
              className="me-4 d-flex flex-shrink-0 justify-content-center align-items-center bg-primary rounded-circle text-white"
              style={{ width: "56px", height: "56px" }}
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1332 14.5333C18.2665 14.6667 18.3998 14.6667 18.6665 14.6667H27.9998C28.7998 14.6667 29.3332 14.1333 29.3332 13.3333C29.3332 13.0667 29.3332 12.9333 29.1998 12.8L24.5332 3.46667C24.1332 2.8 23.3332 2.53334 22.6665 2.93334C22.5332 3.06667 22.2665 3.2 22.1332 3.46667L17.4665 12.8C17.1998 13.3333 17.4665 14.1333 18.1332 14.5333ZM23.3332 6.93334L25.8665 12H20.7998L23.3332 6.93334ZM8.6665 2.66667C5.33317 2.66667 2.6665 5.33334 2.6665 8.66667C2.6665 12 5.33317 14.6667 8.6665 14.6667C11.9998 14.6667 14.6665 12 14.6665 8.66667C14.6665 5.33334 11.9998 2.66667 8.6665 2.66667ZM8.6665 12C6.79984 12 5.33317 10.5333 5.33317 8.66667C5.33317 6.80001 6.79984 5.33334 8.6665 5.33334C10.5332 5.33334 11.9998 6.80001 11.9998 8.66667C11.9998 10.5333 10.5332 12 8.6665 12ZM14.2665 17.7333C13.7332 17.2 12.9332 17.2 12.3998 17.7333L8.6665 21.4667L4.93317 17.7333C4.39984 17.2 3.59984 17.2 3.0665 17.7333C2.53317 18.2667 2.53317 19.0667 3.0665 19.6L6.79984 23.3333L3.0665 27.0667C2.53317 27.6 2.53317 28.4 3.0665 28.9333C3.59984 29.4667 4.39984 29.4667 4.93317 28.9333L8.6665 25.2L12.3998 28.9333C12.9332 29.4667 13.7332 29.4667 14.2665 28.9333C14.7998 28.4 14.7998 27.6 14.2665 27.0667L10.5332 23.3333L14.2665 19.6C14.7998 19.0667 14.7998 18.2667 14.2665 17.7333ZM27.9998 17.3333H18.6665C17.8665 17.3333 17.3332 17.8667 17.3332 18.6667V28C17.3332 28.8 17.8665 29.3333 18.6665 29.3333H27.9998C28.7998 29.3333 29.3332 28.8 29.3332 28V18.6667C29.3332 17.8667 28.7998 17.3333 27.9998 17.3333ZM26.6665 26.6667H19.9998V20H26.6665V26.6667Z"
                  fill="CurrentColor"
                />
              </svg>
            </span>
            <div>
              <h3 className="fw-bold">Sign up to our newsletter</h3>
              <p className="text-muted mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 ms-auto">
          <form action="#" data-nordpass-autofill="login" data-np-checked={1}>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="email"
                placeholder="Type your e-mail"
                data-nordpass-autofill="username"
                data-nordpass-uid="ut4v4v976jg"
                autoComplete="off"
                data-np-checked={1}
              />
              <button className="btn btn-primary">Action</button>
              <span
                data-nordpass-uid="ut4v4v976jg"
                style={{
                  width: "24px",
                  minWidth: "24px",
                  height: "24px",
                  backgroundImage:
                    'url("chrome-extension://fooolghllnmhmmndgjiamiiodkpenpbb/icons/icon.svg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  backgroundSize: "auto",
                  border: "none",
                  display: "inline",
                  visibility: "visible",
                  position: "absolute",
                  cursor: "pointer",
                  zIndex: 1001,
                  padding: "0px",
                  transition: "none 0s ease 0s",
                  pointerEvents: "all",
                  left: "1118.39px",
                  top: "991.109px",
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
