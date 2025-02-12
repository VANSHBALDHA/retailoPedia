import call from "./Call";

const profileData = async (data) => {
  let d = await call({
    path: "People/PeopleProfile",
    method: "POST",
    data,
  });
  return d;
};

const exportObject = {
  profileData,
};

export default exportObject;
