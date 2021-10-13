import { Link } from "react-router-dom";

const BoxProps = (props) => {
  return (
    <>
      <div className="col-xl-4 col-md-6 mb-4">
        <Link to={props.http}>
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div
                    className="
                      text-2xs
                      font-weight-bold
                      text-primary text-uppercase
                      mb-1
                    "
                  >
                    {props.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BoxProps;
