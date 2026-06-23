function profilecard({name,degree,jobTitle,skills}) {
  return (
    <div className="profile-card">
      <h1>{name}</h1>
      <p>{degree}</p>
      <p>{jobTitle}</p>
      <p>Skills: {skills.join(", ")}</p>

      <button className="btn">Follow</button>
      <img src="https://via.placeholder.com/150" alt="Profile" />
    </div>
  );
}
export default profilecard;