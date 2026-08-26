export const formatCityTime = (timestamp, timezone) => {
  return new Date(timestamp + timezone * 1000).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  });
};
