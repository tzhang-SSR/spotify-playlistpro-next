export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const accessToken = JSON.parse(localStorage.getItem("token") || "{}");
    return accessToken;
  }
};

export const getProfileData = async () => {
  try {
    const accessToken = getAccessToken();
    const res = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log({ err });
  }
};
