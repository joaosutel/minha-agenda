const errors = {
  204: {
    code: 204,
    description: "No Content",
    message: "Request completed but we still do not have registered data.",
    svg: window.location.origin + "/assets/svg/not_found.svg",
  },
  404: {
    code: 404,
    description: "Page Not Found",
    message: "Sorry, the page you are looking for could not be found.",
    svg: window.location.origin + "/assets/svg/not_found.svg",
  },
  500: {
    code: 500,
    description: "Server Error",
    message: "Whoops, something went wrong on our servers.",
    svg: window.location.origin + "/assets/svg/server_error.svg",
  },
};

export default errors;
