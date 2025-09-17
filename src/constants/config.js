// ---------------- CONFIG ---------------- //
export const baseConfig = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const formDataConfig = {
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: true,
};

// Utility to select config dynamically
 export const getConfig = (type = "json") => (type === "form" ? formDataConfig : baseConfig);



 