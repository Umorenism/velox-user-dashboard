import { apiClient } from "./apiClient";

// ✅ Get all packages
export const getUserPackages = async () => {
  const response = await apiClient.get("api/users/packages");
  console.log("fetchpackages:",response.data)
  return response.data;
};

// ✅ Buy a package
export const buyUserPackage = async (packageId) => {
  const response = await apiClient.post("api/users/package/buy", { packageId });
  console.log("Buy Package Response:", response.data);
  return response.data;
};

// ✅ Renew a package
export const renewUserPackage = async (packageId) => {
  const response = await apiClient.post("api/users/package/renew", { packageId });
  console.log("Renew Package Response:", response.data);
  return response.data;
};
