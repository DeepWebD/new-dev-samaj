export const showPublicChrome = (path) => {
  if (path.includes("/school-management")) {
    // Code to execute if path includes "dashboard"
  }
  if (path == "/login" || path.includes("/school-management")) return false;

  return true;
};
