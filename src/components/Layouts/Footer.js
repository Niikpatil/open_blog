import React from "react";

export const Footer = () => {
  //   return (
  //     <div className="mt-auto text-dark-50">
  //       <p>
  //         Cover template for{" "}
  //         <a href="https://getbootstrap.com/" class="text-white">
  //           Bootstrap
  //         </a>
  //         , by{" "}
  //         <a href="https://twitter.com/mdo" class="text-white">
  //           @mdo
  //         </a>
  //         .
  //       </p>
  //     </div>
  //   );
  // };
  return (
    <div className="container-l shadow p-3 mb-5 bg-secondary">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-6 border-bottom">
        <div className="col-md-4 d-flex align-items-center">
          {/* <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            {/* <svg className="bi" width="30" height="24">
              <use xlink:href="#bootstrap"></use>
            </svg> 
          </a> */}
          <span className=" b-5 text-light">© 2021 Company, Inc</span>
        </div>

        {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="/#">
              {/* <svg className="bi" width="24" height="24">
                <use xlink:href="#twitter"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/#">
              {/* <svg className="bi" width="24" height="24">
                <use xlink:href="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/#">
              {/* <svg className="bi" width="24" height="24">
                <use xlink:href="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul> */}
      </footer>
    </div>
  );
};
