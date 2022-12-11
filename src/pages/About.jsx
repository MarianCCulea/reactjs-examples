import ProjectModel from "./ProjectModel";
import PostList from "./PostList";

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <ProjectModel></ProjectModel>
          <ProjectModel></ProjectModel>
          <ProjectModel></ProjectModel>
        </div>
      </div>
      <br />
      <div>
        <PostList />
      </div>
    </section>
  );
};

export default About;
