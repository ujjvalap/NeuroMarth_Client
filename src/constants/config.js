// Base JSON config
export const getConfig = (type = "json") => {
  const token = localStorage.getItem("token"); // Read token dynamically every time
  return {
    headers: {
      "Content-Type": type === "form" ? "multipart/form-data" : "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    
    withCredentials: true,
  };
};
