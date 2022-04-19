import React from "react";

const SingleMember = () => {
  return (
    <section className="app-ecommerce-details">
      <div className="card">
        <div className="card-body">
          <div className="row my-2">
            <div className="col-12 col-md-5 d-flex align-items-center justify-content-center mb-2 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg"
                  className="img-fluid product-img"
                  alt="product image"
                />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <h4>Apple Watch Series 5</h4>
              <span className="card-text item-company">
                By{" "}
                <a href="#" className="company-name">
                  Apple
                </a>
              </span>
              <div className="ecommerce-details-price d-flex flex-wrap mt-1">
                <h4 className="item-price me-1">$499.99</h4>
                <ul className="unstyled-list list-inline ps-1 border-start">
                  <li className="ratings-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star filled-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </li>
                  <li className="ratings-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star filled-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </li>
                  <li className="ratings-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star filled-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </li>
                  <li className="ratings-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star filled-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </li>
                  <li className="ratings-list-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star unfilled-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </li>
                </ul>
              </div>
              <p className="card-text">
                Available - <span className="text-success">In stock</span>
              </p>
              <p className="card-text">
                GPS, Always-On Retina display, 30% larger screen, Swimproof, ECG
                app, Electrical and optical heart sensors, Built-in compass,
                Elevation, Emergency SOS, Fall Detection, S5 SiP with up to 2x
                faster 64-bit dual-core processor, watchOS 6 with Activity
                trends, cycle tracking, hearing health innovations, and the App
                Store on your wrist
              </p>
              <ul className="product-features list-unstyled">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-cart"
                  >
                    <circle cx={9} cy={21} r={1} />
                    <circle cx={20} cy={21} r={1} />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>{" "}
                  <span>Free Shipping</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-dollar-sign"
                  >
                    <line x1={12} y1={1} x2={12} y2={23} />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                  <span>EMI options available</span>
                </li>
              </ul>
              <hr />
              <div className="product-color-options">
                <h6>Colors</h6>
                <ul className="list-unstyled mb-0">
                  <li className="d-inline-block selected">
                    <div className="color-option b-primary">
                      <div className="filloption bg-primary" />
                    </div>
                  </li>
                  <li className="d-inline-block">
                    <div className="color-option b-success">
                      <div className="filloption bg-success" />
                    </div>
                  </li>
                  <li className="d-inline-block">
                    <div className="color-option b-danger">
                      <div className="filloption bg-danger" />
                    </div>
                  </li>
                  <li className="d-inline-block">
                    <div className="color-option b-warning">
                      <div className="filloption bg-warning" />
                    </div>
                  </li>
                  <li className="d-inline-block">
                    <div className="color-option b-info">
                      <div className="filloption bg-info" />
                    </div>
                  </li>
                </ul>
              </div>
              <hr />
              <div className="d-flex flex-column flex-sm-row pt-1">
                <a
                  href="#"
                  className="btn btn-primary btn-cart me-0 me-sm-1 mb-1 mb-sm-0 waves-effect waves-float waves-light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shopping-cart me-50"
                  >
                    <circle cx={9} cy={21} r={1} />
                    <circle cx={20} cy={21} r={1} />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  <span className="add-to-cart">Add to cart</span>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-secondary btn-wishlist me-0 me-sm-1 mb-1 mb-sm-0 waves-effect"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-heart me-50"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span>Wishlist</span>
                </a>
                <div className="btn-group dropdown-icon-wrapper btn-share">
                  <button
                    type="button"
                    className="btn btn-icon hide-arrow btn-outline-secondary dropdown-toggle waves-effect"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-share-2"
                    >
                      <circle cx={18} cy={5} r={3} />
                      <circle cx={6} cy={12} r={3} />
                      <circle cx={18} cy={19} r={3} />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="#" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                    <a href="#" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-youtube"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </a>
                    <a href="#" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram"
                      >
                        <rect
                          x={2}
                          y={2}
                          width={20}
                          height={20}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMember;
